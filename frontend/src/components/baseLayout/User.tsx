import {
	Avatar,
	Box,
	Group,
	Text,
	UnstyledButton,
	useMantineTheme,
} from "@mantine/core";
import {ChevronLeft, ChevronRight} from "tabler-icons-react";
import {IUser} from "types";

interface IUserProps {
	user: IUser;
}

export default function User({user}: IUserProps) {
	const theme = useMantineTheme();
	const {profile, name, email} = user;

	return (
		<Box
			sx={{
				paddingTop: theme.spacing.sm,
				borderTop: `1px solid ${
					theme.other.isDarkTheme ? theme.colors.dark[4] : theme.colors.gray[2]
				}`,
			}}
		>
			<UnstyledButton
				sx={{
					display: "block",
					width: "100%",
					padding: theme.spacing.xs,
					borderRadius: theme.radius.sm,
					color: theme.other.isDarkTheme ? theme.colors.dark[0] : theme.black,

					"&:hover": {
						backgroundColor: theme.other.isDarkTheme
							? theme.colors.dark[6]
							: theme.colors.gray[0],
					},
				}}
			>
				<Group>
					<Avatar src={profile} radius="xl" />
					<Box sx={{flex: 1}}>
						<Text size="sm" weight={500}>
							{name}
						</Text>
						<Text color="dimmed" size="xs">
							{email}
						</Text>
					</Box>

					{theme.dir === "ltr" ? (
						<ChevronRight size={18} />
					) : (
						<ChevronLeft size={18} />
					)}
				</Group>
			</UnstyledButton>
		</Box>
	);
}
