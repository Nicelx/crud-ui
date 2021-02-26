import React from "react";
import classes from "./Button.module.css";

export const Button = (props) => {
	const clsx = [`${classes.Button}`];

	switch (props.type) {
		case "add":
			clsx.push(`${classes.Add}`);

			break;
		case "edit":
			clsx.push(`${classes.Edit}`);
			break;
		case "delete":
			clsx.push(`${classes.Delete}`);

			break;
		default:
			break;
	}
	return (
		<button className={clsx.join(" ")} onClick={props.onClick}>
			{props.children}
		</button>
	);
};
