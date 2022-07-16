import { UI_STRINGS } from "./appStrings";
const { EMAIL, NAME, PASSWORD } = UI_STRINGS;

export const baseForm = [
  {
    label: NAME,
    name: "name",
    type: "text",
    value: "",
    validate: function () {
      const errors = [];
      if (!this.value) {
        errors.push("Name is a required field");
      }
      return errors;
    },
  },
  {
    label: EMAIL,
    name: "email",
    type: "text",
    value: "",
    validate: function () {
      const errors = [];
      if (!this.value) {
        errors.push("Email is a required field");
      }

      if (!this.value.includes("@") || !this.value.includes(".")) {
        errors.push("Please enter a valid email ID");
      }
      return errors;
    },
  },
  {
    label: PASSWORD,
    name: "password",
    type: "password",
    value: "",
    validate: function () {
      const errors = [];
      if (!this.value) {
        errors.push("Password is a required field");
      }

      if (this.value.length < 8) {
        errors.push("Password must be at least 8 characters long");
      }
      return errors;
    },
  },
];
