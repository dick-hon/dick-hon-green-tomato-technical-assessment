import {Routes as ReactRouterRoutes, Route} from "react-router-dom";
import {BaseLayoutView} from "views";

export default function Routes() {
	return (
		<ReactRouterRoutes>
			<Route path="/" element={<BaseLayoutView />}>
				<Route index element={<h1>Home Page</h1>} />
				<Route path="*" element={<h1>404 page</h1>} />
			</Route>
		</ReactRouterRoutes>
	);
}
