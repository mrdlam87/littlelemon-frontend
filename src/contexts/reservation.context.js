import { createContext, useState } from "react";
import { fetchAPI, submitAPI } from "../utils/reservations";
import { getDateString } from "../utils/date";

export const ReservationContext = createContext({
  availableTimes: [],
  fetchAvailableTimes: () => {},
  submitReservation: async () => {},
  isSubmitting: false,
});

export const ReservationProvider = ({ children }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [reservationsMap, setReservationsMap] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchAvailableTimes = (date) => {
    const result = fetchAPI(date);
    const reservationTimes =
      reservationsMap[getDateString(date)]?.map((r) => r.time) ?? [];
    const updatedAvailableTimes = result.filter(
      (t) => !reservationTimes.includes(t)
    );

    setAvailableTimes(updatedAvailableTimes);
  };

  const submitReservation = async (form) => {
    return new Promise(async (resolve, reject) => {
      try {
        setIsSubmitting(true);
        const result = await submitAPI(form);
        const reservations = reservationsMap[form.date] || [];
        const updatedReservations = [...reservations, form];
        const updatedReservationsMap = {
          ...reservationsMap,
          [form.date]: updatedReservations,
        };

        setReservationsMap(updatedReservationsMap);
        setAvailableTimes([]);

        setIsSubmitting(false);
        resolve(result);
      } catch (error) {
        setIsSubmitting(false);
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
