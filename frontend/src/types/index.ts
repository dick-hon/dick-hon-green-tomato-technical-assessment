import {userSchema} from "schema";
import {InferType} from "yup";

interface ILink {
	icon: React.ReactNode;
	color: string;
	label: string;
	href: string;
}
export type ILinks = Array<ILink>;
export interface IUser {
	profile: string;
	name: string;
	email: string;
}

export type User = InferType<typeof userSchema>;

export type UserDTO = Pick<User, "name" | "email" | "phoneNumber"> & {
	id: string;
	dob: string;
};
