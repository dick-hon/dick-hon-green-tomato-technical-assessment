import AxiosAPI from "libs/api/axios";
import {UserStore} from "./UserStore";

const api = new AxiosAPI(process.env.REACT_APP_API_URL || "");

const userStore = new UserStore(api);

export const store = {
	user: userStore,
};
