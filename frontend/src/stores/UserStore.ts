import {API, Response} from "libs/api";
import {User, UserDTO} from "types";

export class UserStore {
	constructor(private readonly api: API) {}

	public async createOne(
		user: Omit<User, "id" | "status">,
	): Promise<Response<UserDTO>> {
		return await this.api.post<UserDTO>("/users", {
			body: {...user},
		});
	}

	public async getMany(): Promise<Response<UserDTO[]>> {
		return await this.api.get<UserDTO[]>("/users");
	}
}
