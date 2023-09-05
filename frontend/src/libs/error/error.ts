export class UserInputError {
	public readonly name: string;

	constructor(public message: string) {
		this.name = "UserInputError";
	}
}
