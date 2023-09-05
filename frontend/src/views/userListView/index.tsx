import {Container, Paper, ScrollArea, Table, Text} from "@mantine/core";
import LoadingTable from "components/loadingTable";
import dayjs from "dayjs";
import {useMemo} from "react";
import {useAsync} from "react-use";
import {store} from "stores";

export default function UserListView() {
	const state = useAsync(async () => {
		return store.user.getMany();
	}, [store]);

	const users = state.value?.data || [];

	const isLoading = useMemo(() => state.loading, [state]);

	if (isLoading) return <LoadingTable numberOfRows={10} />;

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
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Date of Birth</th>
								<th>Phone Number</th>
							</tr>
						</thead>
						<tbody>
							{users.map(({name, email, dob, phoneNumber}, index) => (
								<tr key={index}>
									<td>
										<Text size="sm">{index + 1}</Text>
									</td>
									<td>
										<Text size="sm">{name}</Text>
									</td>
									<td>
										<Text size="sm">{email}</Text>
									</td>
									<td>
										<Text size="sm">{dayjs(dob).format("DD-MM-YYYY")}</Text>
									</td>
									<td>
										<Text size="sm">{phoneNumber}</Text>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</ScrollArea>
			</Paper>
		</Container>
	);
}
