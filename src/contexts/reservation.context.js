import { createContext, useReducer } from "react";
import { fetchAPI, submitAPI } from "../utils/reservations";
import { getDateString } from "../utils/date";

const reservationActions = {
  setAvailableTimes: "SET_AVAILABLE_TIMES",
  setReservationsMap: "SET_RESERVATIONS_MAP",
  setIsSubmitting: "SET_IS_SUBMITTING",
};

const initialState = {
  availableTimes: [],
  reservationsMap: {},
  isSubmitting: false,
};

const reservationsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case reservationActions.setAvailableTimes:
      return { ...state, availableTimes: payload };
    case reservationActions.setReservationsMap:
      return { ...state, reservationsMap: payload };
    case reservationActions.setIsSubmitting:
      return { ...state, isSubmitting: payload };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const ReservationContext = createContext({
  availableTimes: [],
  fetchAvailableTimes: () => {},
  submitReservation: async () => {},
  isSubmitting: false,
});

export const ReservationProvider = ({ children }) => {
  const [{ availableTimes, reservationsMap, isSubmitting }, dispatch] =
    useReducer(reservationsReducer, initialState);

  const fetchAvailableTimes = (date) => {
    const result = fetchAPI(date);
    const reservationTimes =
      reservationsMap[getDateString(date)]?.map((r) => r.time) ?? [];
    const updatedAvailableTimes = result.filter(
      (t) => !reservationTimes.includes(t)
    );

    dispatch({
      type: reservationActions.setAvailableTimes,
      payload: updatedAvailableTimes,
    });
  };

  const submitReservation = async (form) => {
    return new Promise(async (resolve, reject) => {
      try {
        dispatch({ type: reservationActions.setIsSubmitting, payload: true });
        const result = await submitAPI(form);
        const reservations = reservationsMap[form.date] || [];
        const updatedReservations = [...reservations, form];
        const updatedReservationsMap = {
          ...reservationsMap,
          [form.date]: updatedReservations,
        };

        dispatch({
          type: reservationActions.setReservationsMap,
          payload: updatedReservationsMap,
        });
        dispatch({ type: reservationActions.setAvailableTimes, payload: [] });

        dispatch({ type: reservationActions.setIsSubmitting, payload: false });
        resolve(result);
      } catch (error) {
        dispatch({ type: reservationActions.setIsSubmitting, payload: false });
        reject(error);
      }
    });
  };

  const value = {
    availableTimes,
    fetchAvailableTimes,
    submitReservation,
    isSubmitting,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};
