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
