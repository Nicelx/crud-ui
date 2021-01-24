import React from "react";
import Button from "./../../../../components/Button/Button";

import classes from "../TableRow/TableRow.module.css";

const TableControls = (props) => {
	const { addRecord, inputsChange } = props;

	return (
		<tbody>
			<tr className={classes.TableRow}>
				<td>
					<input
						name="name"
						placeholder = "some name"
						onChange={(e) => inputsChange(false, e)}
						type="text"
					/>
				</td>
				<td>
					<input
						name="email"
						placeholder = "any@yours.emails"
						onChange={(e) => inputsChange(false, e)}
						type="text"
					/>
				</td>
				<td>
					<input
						name="age"
						placeholder = "20"
						onChange={(e) => inputsChange(false, e)}
						type="text"
					/>
				</td>
				<td>
					<Button
						type="add"
						onClick={addRecord}
						addRecord={addRecord}
					>
						Add Record
					</Button>
				</td>
			</tr>
		</tbody>
	);
};

export default TableControls;
