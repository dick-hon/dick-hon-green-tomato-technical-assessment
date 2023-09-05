import {
	AppShell,
	Burger,
	Group,
	Header,
	MediaQuery,
	Navbar,
	useMantineColorScheme,
} from "@mantine/core";
import ColorSchemeButton from "components/baseLayout/ColorSchemeButton";
import NavLinks from "components/baseLayout/NavLinks";
import User from "components/baseLayout/User";
import {COLOR_SCHEME_TYPE} from "hooks/useColorScheme";
import {useCallback, useMemo, useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {CalendarTime, Home} from "tabler-icons-react";
import {ILinks, IUser} from "types";

const LINKS: ILinks = [
	{
		icon: <Home size={16} />,
		color: "teal",
		label: "Home",
		href: "/",
	},
	{
		icon: <CalendarTime size={16} />,
		color: "blue",
		label: "User Registration",
		href: "/register",
	},
	{
		icon: <CalendarTime size={16} />,
		color: "grape",
		label: "Submitted Forms",
		href: "/forms",
	},
];

const USER: IUser = {
	profile:
		"https://media-exp1.licdn.com/dms/image/C4D03AQF_qOZsilRWrg/profile-displayphoto-shrink_800_800/0/1629990230315?e=1658966400&v=beta&t=594ZjTGJHTZWTV81NG04N2jUDtHeCaylJKRswzz7w0s",
	name: "Dick Hon",
	email: "honchunkin@gmail.com",
};

export default function BaseLayoutView() {
	const navigate = useNavigate();
	const location = useLocation();

	const parentPath = useMemo(
		() => `/${location.pathname.split("/")[1]}`,
		[location],
	);

	const {colorScheme, toggleColorScheme} = useMantineColorScheme();

	const [isToggle, setIsToggle] = useState(false);

	const onNavLinkClick = useCallback(
		(href: string) => {
			navigate(href);
			setIsToggle(false);
		},
		[navigate],
	);

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			fixed
			navbar={
				<Navbar
					p="md"
					hiddenBreakpoint="sm"
					hidden={!isToggle}
					width={{sm: 300}}
				>
					<Navbar.Section grow mt="xs">
						<NavLinks
							links={LINKS}
							onNavLinkClick={onNavLinkClick}
							parentPath={parentPath}
						/>
					</Navbar.Section>
					<Navbar.Section>
						<User user={USER} />
					</Navbar.Section>
				</Navbar>
			}
			header={
				<Header height={70}>
					<div style={{display: "flex", alignItems: "center", height: "100%"}}>
						<MediaQuery largerThan="sm" styles={{display: "none"}}>
							<Burger
								opened={isToggle}
								onClick={() => setIsToggle(!isToggle)}
								size="sm"
								color={
									colorScheme === COLOR_SCHEME_TYPE.DARK ? "white" : "black"
								}
								mr="xl"
								px={20}
							/>
						</MediaQuery>

						<Group
							sx={{
								height: "100%",
								width: "100%",
								"@media (max-width: 755px)": {
									paddingLeft: "initial",
								},
							}}
							px={20}
							position="apart"
						>
							<span onClick={() => navigate("/")}>Logo</span>
							{/* <Logo onClick={() => navigate("/")} logo={logo} /> */}
							<ColorSchemeButton
								onClick={() => toggleColorScheme()}
								colorScheme={colorScheme}
							/>
						</Group>
					</div>
				</Header>
			}
			styles={(theme) => ({
				main: {
					backgroundColor: theme.other.isDarkTheme
						? theme.colors.dark[8]
						: theme.colors.gray[0],
				},
			})}
		>
			<Outlet />
		</AppShell>
	);
}
