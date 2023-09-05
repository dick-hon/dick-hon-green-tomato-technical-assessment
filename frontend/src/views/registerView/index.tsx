import {Button, Group, Text, TextInput, createStyles, rem} from "@mantine/core";
import {DatePickerInput} from "@mantine/dates";
import {useForm, yupResolver} from "@mantine/form";
import {userSchema} from "schema";
import {User} from "types";

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

	const form = useForm<User>({
		validate: yupResolver(userSchema),
		initialValues: {
			name: "",
			email: "",
			dob: null,
			phoneNumber: "",
		},
	});

	const onSubmit = (payload: User) => {
		console.debug({payload});
	};

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
