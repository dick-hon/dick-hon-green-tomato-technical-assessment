import dayjs from "dayjs";
import {date, object, string} from "yup";

export const userSchema = object().shape({
	name: string().required("Name field is required"),
	email: string()
		.email("Please input a valid email address")
		.required("Email field is required"),
	dob: date()
		.nullable()
		.test("is-18-or-older", "You must be at least 18 years old", (value) => {
			const today = dayjs();
			const birthDate = dayjs(value);
			const age = today.diff(birthDate, "year");
			return age >= 18;
		}),

	phoneNumber: string(),
});
