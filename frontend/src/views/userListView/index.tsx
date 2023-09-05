import {Container, Paper, ScrollArea, Table, Text} from "@mantine/core";
import {UserDTO} from "types";

const MOCKED_USERS: UserDTO[] = [
	{
		id: "1",
		name: "Dick",
		email: "dick@gmail.com",
		dob: "06-09-2023",
		phoneNumber: "123",
	},
	{
		id: "1",
		name: "Dick",
		email: "dick@gmail.com",
		dob: "06-09-2023",
		phoneNumber: "123",
	},
	{
		id: "1",
		name: "Dick",
		email: "dick@gmail.com",
		dob: "06-09-2023",
		phoneNumber: "123",
	},
	{
		id: "1",
		name: "Dick",
		email: "dick@gmail.com",
		dob: "06-09-2023",
		phoneNumber: "123",
	},
	{
		id: "1",
		name: "Dick",
		email: "dick@gmail.com",
		dob: "06-09-2023",
		phoneNumber: "123",
	},
	{
		id: "1",
		name: "Dick",
		email: "dick@gmail.com",
		dob: "06-09-2023",
		phoneNumber: "123",
	},
	{
		id: "1",
		name: "Dick",
		email: "dick@gmail.com",
		dob: "06-09-2023",
		phoneNumber: "123",
	},
];

export default function UserListView() {
	return (
		<Container size="xl" px="xl">
			<Paper
				radius="md"
				withBorder
				p="lg"
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
					height: "100%",
				})}
			>
				<ScrollArea>
					<Table
						sx={{minWidth: 800}}
						verticalSpacing="sm"
						striped
						highlightOnHover
					>
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Date of Birth</th>
								<th>Phone Number</th>
							</tr>
						</thead>
						<tbody>
							{MOCKED_USERS.map(
								({id, name, email, dob, phoneNumber}, index) => (
									<tr key={id}>
										<td>
											<Text size="sm">{id}</Text>
										</td>
										<td>
											<Text size="sm">{name}</Text>
										</td>
										<td>
											<Text size="sm">{email}</Text>
										</td>
										<td>
											<Text size="sm">{dob}</Text>
										</td>
										<td>
											<Text size="sm">{phoneNumber}</Text>
										</td>
									</tr>
								),
							)}
						</tbody>
					</Table>
				</ScrollArea>
			</Paper>
		</Container>
	);
}
