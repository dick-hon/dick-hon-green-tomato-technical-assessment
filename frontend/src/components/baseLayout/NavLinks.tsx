import {Group, Text, ThemeIcon, UnstyledButton} from "@mantine/core";
import React, {useMemo} from "react";
import {ILinks} from "types";

interface INavLinksProps {
	links: ILinks;
	parentPath: string;
	onNavLinkClick: (href: string) => void;
}

interface NavLinkProps {
	icon: React.ReactNode;
	color: string;
	label: string;
	href: string;
	isActive: boolean;
	onClick: (href: string) => void;
}

function NavLink({icon, color, label, href, isActive, onClick}: NavLinkProps) {
	return (
		<UnstyledButton
			sx={(theme) => ({
				display: "block",
				width: "100%",
				padding: theme.spacing.xs,
				borderRadius: theme.radius.sm,
				color: theme.other.isDarkTheme ? theme.colors.dark[0] : theme.black,

				"&:hover": {
					backgroundColor: isActive
						? theme.other.isDarkTheme
							? theme.fn.rgba(theme.colors.blue[9], 0.45)
							: theme.colors.blue[0]
						: theme.other.isDarkTheme
						? theme.colors.dark[6]
						: theme.colors.gray[0],
				},
				backgroundColor: isActive
					? theme.other.isDarkTheme
						? theme.fn.rgba(theme.colors.blue[9], 0.45)
						: theme.colors.blue[0]
					: "transparent",
			})}
			onClick={() => onClick(href)}
		>
			<Group>
				<ThemeIcon color={color} variant="light">
					{icon}
				</ThemeIcon>

				<Text size="sm">{label}</Text>
			</Group>
		</UnstyledButton>
	);
}

export default function NavLinks({
	links,
	parentPath,
	onNavLinkClick,
}: INavLinksProps) {
	return (
		<>
			{links.map((link) => {
				const isActive = useMemo(() => parentPath === link.href, [parentPath]);

				return (
					<NavLink
						key={link.label}
						{...link}
						onClick={onNavLinkClick}
						isActive={isActive}
					/>
				);
			})}
		</>
	);
}
