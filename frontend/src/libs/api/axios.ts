import axios, {AxiosError, AxiosInstance, AxiosResponse} from "axios";
import {API, RequestOptions, Response} from "./api";
import {
	AuthenticationError,
	ClientError,
	InternalServerError,
	NotFoundError,
} from "./error";

type ResponseError = {
	error: string;
	message: string;
	statusCode: number;
};

export default class AxiosAPI implements API {
	private readonly instance: AxiosInstance;
	private headers: Record<string, string> | null;
	constructor(
		public baseURL: string,
		header?: Record<string, string>,
	) {
		this.instance = axios.create({
			baseURL,
		});
		this.headers = header ?? null;
	}

	public async get<T>(
		path: string,
		options?: Omit<RequestOptions, "body">,
	): Promise<Response<T>> {
		try {
			const response = await this.instance.get<T>(path, {
				headers: {...this.headers},
				params: options?.query,
			});
			return this.parseResponse<T>(response);
		} catch (err) {
			return this.parseError<T>(err as AxiosError);
		}
	}

	public async post<T>(
		path: string,
		options?: RequestOptions,
	): Promise<Response<T>> {
		try {
			const response = await this.instance.post<T>(path, options?.body, {
				headers: {...this.headers},
				params: options?.query,
			});
			return this.parseResponse<T>(response);
		} catch (err) {
			return this.parseError<T>(err as AxiosError);
		}
	}

	public async patch<T>(
		path: string,
		options?: RequestOptions,
	): Promise<Response<T>> {
		try {
			const response = await this.instance.patch<T>(path, options?.body, {
				headers: {...this.headers},
				params: options?.query,
			});
			return this.parseResponse<T>(response);
		} catch (err) {
			return this.parseError<T>(err as AxiosError);
		}
	}

	public async delete<T>(
		path: string,
		options?: RequestOptions,
	): Promise<Response<T>> {
		try {
			const response = await this.instance.delete<T>(path, {
				headers: {...this.headers},
				params: options?.query,
			});
			return this.parseResponse<T>(response);
		} catch (error) {
			return this.parseError<T>(error as AxiosError);
		}
	}

	private parseResponse<T>(response: AxiosResponse<T>): Response<T> {
		return Response.makeSuccess(response.status, response.data);
	}

	private parseError<T>(error: AxiosError): Response<T> {
		if (!error.response) {
			throw error;
		}
		const errorResponseData = error.response.data as ResponseError;
		if (error.response?.status === 400) {
			return Response.makeError(
				error.response.status,
				new ClientError(errorResponseData.message),
			);
		}
		if (error.response?.status === 401) {
			return Response.makeError(
				error.response.status,
				new AuthenticationError(errorResponseData.message),
			);
		}
		if (error.response?.status === 404) {
			return Response.makeError(error.response.status, new NotFoundError());
		}
		if (error.response?.status === 500) {
			return Response.makeError(
				error.response.status,
				new InternalServerError(),
			);
		}
		throw error;
	}
}
