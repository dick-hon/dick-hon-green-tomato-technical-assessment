import AxiosAPI from "libs/api/axios";
import {UserStore} from "./UserStore";

const api = new AxiosAPI("http://localhost:4000");

const userStore = new UserStore(api);

export const store = {
	user: userStore,
};
