import React from "react";

interface ILogoProps {
	logo: React.ReactNode;
	onClick: () => void;
}

export default function Logo({logo, onClick}: ILogoProps) {
	return (
		<div
			onClick={onClick}
			style={{cursor: "pointer", display: "flex", justifyContent: "center"}}
		>
			{logo}
		</div>
	);
}
