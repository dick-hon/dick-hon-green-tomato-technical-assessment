import {Button, Group, Text, TextInput, createStyles, rem} from "@mantine/core";
import {DatePickerInput} from "@mantine/dates";
import {useForm, yupResolver} from "@mantine/form";
import {notifications} from "@mantine/notifications";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";
import {useAsyncFn} from "react-use";
import {userSchema} from "schema";
import {store} from "stores";
import {CircleCheck, X} from "tabler-icons-react";
import {Path, User} from "types";

const useStyles = createStyles((theme) => {
	const BREAKPOINT = theme.fn.smallerThan("sm");

	return {
		wrapper: {
			display: "flex",
			backgroundColor:
				theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
			borderRadius: theme.radius.lg,
			padding: rem(4),
			border: `${rem(1)} solid ${
				theme.colorScheme === "dark"
					? theme.colors.dark[8]
					: theme.colors.gray[2]
			}`,

			[BREAKPOINT]: {
				flexDirection: "column",
			},
		},

		form: {
			boxSizing: "border-box",
			flex: 1,
			padding: theme.spacing.xl,
			paddingLeft: `calc(${theme.spacing.xl} * 2)`,
			borderLeft: 0,

			[BREAKPOINT]: {
				padding: theme.spacing.md,
				paddingLeft: theme.spacing.md,
			},
		},

		fields: {
			marginTop: rem(-12),
		},

		fieldInput: {
			flex: 1,

			"& + &": {
				marginLeft: theme.spacing.md,

				[BREAKPOINT]: {
					marginLeft: 0,
					marginTop: theme.spacing.md,
				},
			},
		},

		fieldsGroup: {
			display: "flex",

			[BREAKPOINT]: {
				flexDirection: "column",
			},
		},

		title: {
			marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
		},

		submit: {
			[BREAKPOINT]: {
				flex: 1,
			},
		},
	};
});

export default function RegisterView() {
	const {classes} = useStyles();
	const navigate = useNavigate();

	// TODO: add loading state
	const [state, createUser] = useAsyncFn(
		async (payload: User) => {
			return store.user.createOne({
				name: payload.name,
				email: payload.email,
				phoneNumber: payload.phoneNumber,
				dob: payload.dob,
			});
		},
		[store],
	);

	const form = useForm<User>({
		validate: yupResolver(userSchema),
		initialValues: {
			name: "",
			email: "",
			dob: null,
			phoneNumber: "",
		},
	});

	const onSubmit = async (payload: User) => {
		notifications.show({
			id: "api-call",
			loading: true,
			title: "Loading your data",
			message: "Registering a user... please wait.",
			autoClose: false,
		});

		try {
			const response = await createUser(payload);

			if (!response.success) throw response.error;

			console.debug(
				"response: ",
				dayjs(response.data?.dob).format("dddd, MMMM D, YYYY h:mm A"),
			);

			notifications.update({
				id: "api-call",
				color: "teal",
				title: "Success to register a user",
				message: "Congratulations! Register a user successfully.",
				icon: <CircleCheck />,
			});
			navigate(Path.SubmittedForms);
		} catch (error) {
			notifications.update({
				id: "api-call",
				title: "Bad Request",
				message: "Something went wrong. Please try again later.",
				color: "red",
				icon: <X />,
			});
		}
	};

	console.debug(dayjs(form.values.dob).format("dddd, MMMM D, YYYY h:mm A"));

	return (
		<form
			className={classes.form}
			onSubmit={form.onSubmit((values) => onSubmit(values))}
		>
			<Text fz="lg" fw={700} className={classes.title}>
				User Registration Form
			</Text>

			<div className={classes.fields}>
				<TextInput
					label="Name"
					placeholder="Chan Tai Man"
					name="name"
					withAsterisk
					{...form.getInputProps("name")}
				/>
				<TextInput
					mt="md"
					label="Email"
					placeholder="hello@gmail.com"
					withAsterisk
					{...form.getInputProps("email")}
				/>

				<DatePickerInput
					mt="md"
					label="Date of Birth"
					placeholder="Select your date of birth"
					withAsterisk
					clearable
					{...form.getInputProps("dob")}
				/>

				<TextInput
					mt="md"
					label="Phone number"
					placeholder="67779898"
					{...form.getInputProps("phoneNumber")}
				/>

				<Group position="right" mt="md">
					<Button type="submit" className={classes.submit}>
						Register
					</Button>
				</Group>
			</div>
		</form>
	);
}
