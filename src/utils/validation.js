export const validate = (values) => {
  const errors = {};

  if (!values.date) {
    errors.date = "Required";
  } else if (new Date(values.date).getDate() < new Date().getDate()) {
    errors.date = "Invalid date";
  }

  if (!values.time) {
    errors.time = "Required";
  } else if (new Date(values.date).getDate() < new Date().getDate()) {
    errors.time = "Invalid time";
  }

  if (!values.guests) {
    errors.guests = "Required";
  }

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^[0-9]{10}$/i.test(values.phone)) {
    errors.phone = "Invalid phone number (10 digits required)";
  }

  return errors;
};
