import {
	Button,
	Container,
	Group,
	Image,
	List,
	Paper,
	Text,
	ThemeIcon,
	Title,
	createStyles,
} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {Check} from "tabler-icons-react";
import {Path} from "types";

const useStyles = createStyles((theme) => ({
	inner: {
		display: "flex",
		justifyContent: "space-between",
		paddingTop: 4,
		paddingBottom: 4,
	},

	content: {
		maxWidth: 480,
		marginRight: 3,

		[theme.fn.smallerThan("md")]: {
			maxWidth: "100%",
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 44,
		lineHeight: 1.2,
		fontWeight: 900,

		[theme.fn.smallerThan("xs")]: {
			fontSize: 28,
		},
	},

	control: {
		[theme.fn.smallerThan("xs")]: {
			flex: 1,
		},
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan("md")]: {
			display: "none",
		},
	},

	highlight: {
		position: "relative",
		backgroundColor:
			theme.colorScheme === "dark"
				? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
				: theme.colors[theme.primaryColor][0],
		borderRadius: theme.radius.sm,
		padding: "4px 12px",
	},
}));

export default function HomeView() {
	const {classes} = useStyles();
	const navigate = useNavigate();

	return (
		<Paper
			radius="md"
			withBorder
			p="lg"
			sx={(theme) => ({
				backgroundColor:
					theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
			})}
		>
			<Container>
				<div className={classes.inner}>
					<div className={classes.content}>
						<Title className={classes.title}>
							A <span className={classes.highlight}>User Registration</span>
							<br />
							System
						</Title>
						<Text color="dimmed" mt="md">
							For you to register a user.
						</Text>

						<List
							mt={30}
							spacing="sm"
							size="sm"
							icon={
								<ThemeIcon size={20} radius="xl">
									<Check size={12} />
								</ThemeIcon>
							}
						>
							<List.Item>
								<b>User Registration</b> – to register a user
							</List.Item>
							<List.Item>
								<b>Submitted Forms</b> – to view the submitted history of users
							</List.Item>
						</List>

						<Group mt={30}>
							<Button
								radius="xl"
								size="md"
								className={classes.control}
								onClick={() => navigate(Path.UserRegistration)}
							>
								User Registration
							</Button>
							<Button
								variant="default"
								radius="xl"
								size="md"
								className={classes.control}
								onClick={() => navigate(Path.SubmittedForms)}
							>
								View Submitted Forms
							</Button>
						</Group>
					</div>
					<Image src="icon.png" className={classes.image} />
				</div>
			</Container>
		</Paper>
	);
}
