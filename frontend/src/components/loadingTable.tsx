import {Paper, Skeleton, Stack} from "@mantine/core";

const NUMBER_OF_ROWS = 10;

type Props = {
	numberOfRows: number;
};

export default function LoadingTable({numberOfRows = NUMBER_OF_ROWS}: Props) {
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
			<Skeleton height={30} mb={20} radius="xl" width="40%" />

			<Stack>
				{[...Array(numberOfRows)].map((_, index) => {
					return <Skeleton key={index} height={30} radius="xl" />;
				})}
			</Stack>
		</Paper>
	);
}
