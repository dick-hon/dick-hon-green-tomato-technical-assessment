export class NotFoundError extends Error {
	constructor() {
		super("Resources not found");
		this.name = NotFoundError.name;
	}
}

export class ClientError extends Error {
	constructor(message?: string) {
		super(message || "Client error");
		this.name = ClientError.name;
	}
}

export class AuthenticationError extends Error {
	constructor(message?: string) {
		super(message || "Authentication failed");
		this.name = AuthenticationError.name;
	}
}

export class InternalServerError extends Error {
	constructor() {
		super();
		this.name = InternalServerError.name;
	}
}
