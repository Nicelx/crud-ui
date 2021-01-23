import React from "react";
import classes from "../TableRow/TableRow.module.css";

const TableHeader = () => {
	return (
		<tbody>
			<tr className={classes.TableRow}>
				<th>Name</th>
				<th>Email</th>
				<th>Age</th>
			</tr>
		</tbody>
	);
};

export default TableHeader;
