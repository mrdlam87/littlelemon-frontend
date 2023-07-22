import { render, screen, fireEvent, within } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import ReservationForm from "./routes/reservations/reservation-form/ReservationForm";
import {
  ReservationContext,
  ReservationProvider,
} from "./contexts/reservation.context";
import { useContext } from "react";
import { validate } from "./utils/validation";

test("Renders the Reservations heading", () => {
  render(<ReservationForm />);
  const buttonElement = screen.getByText("Reserve a Table");
  expect(buttonElement).toBeInTheDocument();
});

test("Selecting date via form input will initialize times with non-empty array", async () => {
  render(
    <ReservationProvider>
      <ReservationForm />
    </ReservationProvider>
  );

  const dateInput = screen.getByLabelText("date-label");

  fireEvent.change(dateInput, { target: { value: "2023-07-30" } });

  const timeInput = screen.getByLabelText("time-label");

  const timeOptions = within(timeInput).getAllByRole("option");

  expect(timeOptions.length).toBeGreaterThan(1);
});

test("Selecting pre-defined date via form input will initialize an expected array of times", async () => {
  render(
    <ReservationProvider>
      <ReservationForm />
    </ReservationProvider>
  );

  const dateInput = screen.getByLabelText("date-label");

  fireEvent.change(dateInput, { target: { value: "2023-07-30" } });

  const timeInput = screen.getByLabelText("time-label");

  const timeOptions = within(timeInput).getAllByRole("option");

  expect(timeOptions[0].textContent).toBe("Select time");
  expect(timeOptions[1].textContent).toBe("17:00");
  expect(timeOptions[2].textContent).toBe("17:30");
  expect(timeOptions[3].textContent).toBe("18:30");
  expect(timeOptions[4].textContent).toBe("20:00");
  expect(timeOptions[5].textContent).toBe("20:30");
  expect(timeOptions[6].textContent).toBe("21:00");
  expect(timeOptions[7].textContent).toBe("23:00");
});

describe("ReservationContext", () => {
  describe("availableTimes", () => {
    it("should return non-empty array after fetchAvailableTimes", async () => {
      const { result, waitForNextUpdate } = renderHook(
        () => useContext(ReservationContext),
        {
          wrapper: ReservationProvider,
        }
      );

      await act(async () => {
        result.current.fetchAvailableTimes(new Date());
        await waitForNextUpdate();
      });

      expect(result.current.availableTimes.length).toBeGreaterThan(0);
    });
  });

  describe("fetchAvailableTimes", () => {
    it("should update available times based on selected date", async () => {
      const { result, waitForNextUpdate } = renderHook(
        () => useContext(ReservationContext),
        {
          wrapper: ReservationProvider,
        }
      );

      const selectedDate = new Date("2023-07-30");

      await act(async () => {
        result.current.fetchAvailableTimes(selectedDate);
        await waitForNextUpdate();
      });

      expect(result.current.availableTimes).toEqual(
        expect.arrayContaining([
          "17:00",
          "17:30",
          "18:30",
          "20:00",
          "20:30",
          "21:00",
          "23:00",
        ])
      );
    });
  });
});

test("HTML5 attributes are applied to input fields", () => {
  render(<ReservationForm />);

  const dateInput = screen.getByLabelText("date-label");
  const timeInput = screen.getByLabelText("time-label");
  const indoorInput = screen.getByLabelText("indoor-label");
  const outdoorInput = screen.getByLabelText("outdoor-label");
  const guestsInput = screen.getByLabelText("guests-label");
  const emailInput = screen.getByLabelText("email-label");
  const nameInput = screen.getByLabelText("name-label");
  const phoneInput = screen.getByLabelText("phone-label");
  const occasionInput = screen.getByLabelText("occasion-label");

  expect(dateInput).toHaveAttribute("type", "date");
  expect(timeInput).toHaveAttribute("name", "time");
  expect(indoorInput).toHaveAttribute("type", "radio");
  expect(outdoorInput).toHaveAttribute("type", "radio");
  expect(guestsInput).toHaveAttribute("name", "guests");
  expect(emailInput).toHaveAttribute("type", "email");
  expect(nameInput).toHaveAttribute("type", "text");
  expect(phoneInput).toHaveAttribute("type", "text");
  expect(occasionInput).toHaveAttribute("type", "text");
});

test("should return the correct errors for invalid values", () => {
  const invalidValues = {
    date: "2021-07-15",
    time: "14:00",
    guests: "",
    name: "",
    email: "invalidemail",
    phone: "12345",
  };

  const errors = validate(invalidValues);

  expect(errors.date).toBe("Invalid date");
  expect(errors.time).toBe("Invalid time");
  expect(errors.guests).toBe("Required");
  expect(errors.name).toBe("Required");
  expect(errors.email).toBe("Invalid email address");
  expect(errors.phone).toBe("Invalid phone number (10 digits required)");
});

test("should return an empty object for valid values", () => {
  const validValues = {
    date: "2023-07-30",
    time: "18:00",
    guests: "4",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
  };

  const errors = validate(validValues);

  expect(errors).toEqual({});
});

// test("should display error messages for invalid form input", () => {
//   const invalidValues = {
//     date: "2021-07-15",
//     time: "14:00",
//     guests: "",
//     name: "",
//     email: "invalidemail",
//     phone: "12345",
//   };

//   render(<ReservationForm />);

//   const dateInput = screen.getByLabelText("date-label");
//   const timeInput = screen.getByLabelText("time-label");
//   const guestsInput = screen.getByLabelText("guests-label");
//   const emailInput = screen.getByLabelText("email-label");
//   const nameInput = screen.getByLabelText("name-label");
//   const phoneInput = screen.getByLabelText("phone-label");
//   const submitButton = screen.getByText("Reserve a Table");

//   fireEvent.click(submitButton);

//   expect(screen.getByText("Required")).toBeInTheDocument();

//   fireEvent.change(dateInput, { target: { value: invalidValues.date } });
//   fireEvent.change(timeInput, { target: { value: invalidValues.time } });
//   fireEvent.change(guestsInput, { target: { value: invalidValues.guests } });
//   fireEvent.change(nameInput, { target: { value: invalidValues.name } });
//   fireEvent.change(emailInput, { target: { value: invalidValues.email } });
//   fireEvent.change(phoneInput, { target: { value: invalidValues.phone } });
//   fireEvent.click(submitButton);

//   expect(screen.getByText("Invalid date")).toBeInTheDocument();
//   expect(screen.getByText("Invalid time")).toBeInTheDocument();
//   expect(screen.getByText("Invalid email address")).toBeInTheDocument();
//   expect(
//     screen.getByText("Invalid phone number (10 digits required)")
//   ).toBeInTheDocument();
// });

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"), // Use the actual react-router-dom module for other hooks
//   useNavigate: () => jest.fn(), // Mock the useNavigate function to a mock function
// }));

// test("should submit the form for valid input", async () => {
//   const validValues = {
//     date: "2023-07-30",
//     time: "18:00",
//     guests: "4",
//     name: "John Doe",
//     email: "john@example.com",
//     phone: "1234567890",
//   };

//   render(<Reservations />);

//   const dateInput = screen.getByLabelText("date-label");
//   const timeInput = screen.getByLabelText("time-label");
//   const guestsInput = screen.getByLabelText("guests-label");
//   const emailInput = screen.getByLabelText("email-label");
//   const nameInput = screen.getByLabelText("name-label");
//   const phoneInput = screen.getByLabelText("phone-label");
//   const submitButton = screen.getByText("Reserve a Table");

//   fireEvent.change(dateInput, { target: { value: validValues.date } });
//   fireEvent.change(timeInput, { target: { value: validValues.time } });
//   fireEvent.change(guestsInput, { target: { value: validValues.guests } });
//   fireEvent.change(nameInput, { target: { value: validValues.name } });
//   fireEvent.change(emailInput, { target: { value: validValues.email } });
//   fireEvent.change(phoneInput, { target: { value: validValues.phone } });

//   fireEvent.click(submitButton);

//   await waitFor(() => {
//     expect(phoneInput).toHaveValue("");
//   });

//   expect(dateInput).toHaveValue("dd/mm/yyyy");
//   expect(timeInput).toHaveValue("");
//   expect(guestsInput).toHaveValue("");
//   expect(nameInput).toHaveValue("");
//   expect(emailInput).toHaveValue("");
// });
