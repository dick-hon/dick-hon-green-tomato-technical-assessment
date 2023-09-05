export class NotFoundError extends Error {
	constructor() {
		super("Resources not found");
		this.name = NotFoundError.name;
	}
}

export class ClientError extends Error {
	constructor() {
		super("Client error");
		this.name = ClientError.name;
	}
}

export class AuthenticationError extends Error {
	constructor() {
		super("Authentication failed");
		this.name = AuthenticationError.name;
	}
}

export class InternalServerError extends Error {
	constructor() {
		super();
		this.name = InternalServerError.name;
	}
}
