import {Routes as ReactRouterRoutes, Route} from "react-router-dom";
import {BaseLayoutView, RegisterView, UserListView} from "views";

export default function Routes() {
	return (
		<ReactRouterRoutes>
			<Route path="/" element={<BaseLayoutView />}>
				<Route index element={<h1>Home Page</h1>} />
				<Route path="register" element={<RegisterView />} />
				<Route path="*" element={<UserListView />} />
			</Route>
		</ReactRouterRoutes>
	);
}
