import React from "react";

import classes from "./TableRow.module.css";
import Button from "./../../../../components/Button/Button";

const TableRow = (props) => {
	let content;
	const {
		rowId,
		name,
		age,
		email,
		isEdit,
		inputsChange,
		deleteRecord,
		updateRecord,
		toggleEdit,
	} = props;

	isEdit
		? (content = (
				<>
					<td>
						<input
							name="name"
							type="text"
							onChange={(e) => inputsChange(rowId, e)}
							value={name}
						/>
					</td>
					<td>
						<input
							name="email"
							type="text"
							onChange={(e) => inputsChange(rowId, e)}
							value={email}
						/>
					</td>
					<td>
						<input
							name="age"
							type="text"
							onChange={(e) => inputsChange(rowId, e)}
							value={age}
						/>
					</td>

					<td>
						<Button
							type="add"
							onClick={(e) => updateRecord(rowId, e)}
						>
							Save
						</Button>
						<Button
							type="delete"
							onClick={(e) => deleteRecord(rowId, e)}
						>
							Delete
						</Button>
					</td>
				</>
		  ))
		: (content = (
				<>
					<td>{name}</td>
					<td>{email}</td>
					<td>{age}</td>

					<td>
						<Button
							type="edit"
							onClick={(e) => toggleEdit(rowId, e)}
						>
							Edit
						</Button>
						<Button
							onClick={(e) => deleteRecord(rowId, e)}
							type="delete"
						>
							Delete
						</Button>
					</td>
				</>
		  ));

	// switch (isEdit) {
	// 	case false:
	// 		content = (
	// 			<>
	// 				<td>{name}</td>
	// 				<td>{email}</td>
	// 				<td>{age}</td>

	// 				<td>
	// 					<Button
	// 						type="edit"
	// 						onClick={(e) => toggleEdit(rowId, e)}
	// 					>
	// 						Edit
	// 					</Button>
	// 					<Button
	// 						onClick={(e) => deleteRecord(rowId, e)}
	// 						type="delete"
	// 					>
	// 						Delete
	// 					</Button>
	// 				</td>
	// 			</>
	// 		);
	// 		break;

	// 	case true:
	// 		content = (
	// 			<>
	// 				<td>
	// 					<input
	// 						name="name"
	// 						type="text"
	// 						onChange={(e) => inputsChange(rowId, e)}
	// 						value={name}
	// 					/>
	// 				</td>
	// 				<td>
	// 					<input
	// 						name="email"
	// 						type="text"
	// 						onChange={(e) => inputsChange(rowId, e)}
	// 						value={email}
	// 					/>
	// 				</td>
	// 				<td>
	// 					<input
	// 						name="age"
	// 						type="text"
	// 						onChange={(e) => inputsChange(rowId, e)}
	// 						value={age}
	// 					/>
	// 				</td>

	// 				<td>
	// 					<Button
	// 						type="add"
	// 						onClick={(e) => updateRecord(rowId, e)}
	// 					>
	// 						Save
	// 					</Button>
	// 					<Button
	// 						type="delete"
	// 						onClick={(e) => deleteRecord(rowId, e)}
	// 					>
	// 						Delete
	// 					</Button>
	// 				</td>
	// 			</>
	// 		);
	// 		break;

	// 	default:
	// 		break;
	// }
	return (
		<tbody>
			<tr className={classes.TableRow}>{content}</tr>
		</tbody>
	);
};

export default TableRow;
