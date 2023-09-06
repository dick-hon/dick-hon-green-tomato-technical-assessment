import {Routes as ReactRouterRoutes, Route} from "react-router-dom";
import {
	BaseLayoutView,
	HomeView,
	NotFoundView,
	RegisterView,
	UserListView,
} from "views";

export default function Routes() {
	return (
		<ReactRouterRoutes>
			<Route path="/" element={<BaseLayoutView />}>
				<Route index element={<HomeView />} />
				<Route path="register" element={<RegisterView />} />
				<Route path="forms" element={<UserListView />} />
				<Route path="*" element={<NotFoundView />} />
			</Route>
		</ReactRouterRoutes>
	);
}
