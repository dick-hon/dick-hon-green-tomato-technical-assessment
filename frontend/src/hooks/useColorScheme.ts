import {ColorScheme} from "@mantine/core";
import {useState} from "react";

export enum COLOR_SCHEME_TYPE {
	LIGHT = "light",
	DARK = "dark",
}

const INITIAL_COLOR_SCHEME = (localStorage.getItem("colorScheme") ||
	COLOR_SCHEME_TYPE.LIGHT) as ColorScheme;

export function useColorScheme() {
	const [colorScheme, setColorScheme] =
		useState<ColorScheme>(INITIAL_COLOR_SCHEME);

	const toggleColorScheme = (value?: ColorScheme) => {
		const latestColor =
			value ||
			(colorScheme === COLOR_SCHEME_TYPE.DARK
				? COLOR_SCHEME_TYPE.LIGHT
				: COLOR_SCHEME_TYPE.DARK);

		setColorScheme(latestColor);
		localStorage.setItem("colorScheme", latestColor);
	};
	return {colorScheme, toggleColorScheme};
}
