export interface RequestOptions {
	query?: Record<string, string>;
	body?: Record<string, unknown>;
}

export class Response<T> {
	constructor(
		public readonly success: boolean,
		public readonly status: number,
		public readonly data?: T,
		public readonly error?: Error,
	) {}

	toJSON(): T | null {
		if (!this.success) {
			throw new Error("Response is not successful");
		}
		return this.data ?? null;
	}

	static makeSuccess<K>(status: number, data: K): Response<K> {
		return new Response<K>(true, status, data);
	}

	static makeError<K>(status: number, error: Error): Response<K> {
		return new Response<K>(false, status, undefined, error);
	}
}

export interface API {
	get: <T>(
		path: string,
		options?: Omit<RequestOptions, "body">,
	) => Promise<Response<T>>;
	post: <T>(path: string, options?: RequestOptions) => Promise<Response<T>>;
	patch: <T>(path: string, options?: RequestOptions) => Promise<Response<T>>;
	delete: <T>(path: string, options?: RequestOptions) => Promise<Response<T>>;
}
