import {ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {Notifications} from "@mantine/notifications";
import {COLOR_SCHEME_TYPE, useColorScheme} from "hooks/useColorScheme";
import {BrowserRouter} from "react-router-dom";
import Routes from "routes";

export default function App() {
	const {colorScheme, toggleColorScheme} = useColorScheme();

	return (
		<BrowserRouter basename="/">
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider
					theme={{
						colorScheme,
						other: {
							isDarkTheme: colorScheme === COLOR_SCHEME_TYPE.DARK,
						},
					}}
					withGlobalStyles
					withNormalizeCSS
				>
					<Notifications />
					<Routes />
				</MantineProvider>
			</ColorSchemeProvider>
		</BrowserRouter>
	);
}
