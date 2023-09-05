import {
	Center,
	ColorScheme,
	Group,
	Text,
	UnstyledButton,
	createStyles,
} from "@mantine/core";
import {upperFirst} from "@mantine/hooks";
import {COLOR_SCHEME_TYPE} from "hooks/useColorScheme";
import {Moon, Sun} from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
	control: {
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.dark[8]
				: theme.colors.gray[0],
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		borderRadius: 1000,
		paddingLeft: theme.spacing.sm,
		paddingRight: 4,
		width: 136,
		height: 36,
	},

	iconWrapper: {
		height: 28,
		width: 28,
		borderRadius: 28,
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.colors.yellow[4]
				: theme.colors.dark[4],
		color: theme.colorScheme === "dark" ? theme.black : theme.colors.blue[2],
	},

	value: {
		lineHeight: 1,
	},
}));

interface IColorSchemeButtonProps {
	onClick: () => void;
	colorScheme: ColorScheme;
}

export default function ColorSchemeButton({
	onClick,
	colorScheme,
}: IColorSchemeButtonProps) {
	const {classes} = useStyles();
	const Icon = colorScheme === COLOR_SCHEME_TYPE.DARK ? Sun : Moon;

	return (
		<Group>
			<UnstyledButton className={classes.control} onClick={onClick}>
				<Text size="sm" className={classes.value}>
					{upperFirst(
						colorScheme === COLOR_SCHEME_TYPE.DARK ? "dark" : "light",
					)}
					Theme
				</Text>

				<Center className={classes.iconWrapper}>
					<Icon size={18} />
				</Center>
			</UnstyledButton>
		</Group>
	);
}
