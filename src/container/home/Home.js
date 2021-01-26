import React, { useCallback, useEffect, useState } from "react";

import TableRow from "./components/TableRow/TableRow";
import TableHeader from "./components/TableHeader/TableHeader";
import TableControls from "./components/TableControls/TableControls";

import validate from '../../utility-scripts/validate'
import objectsEquality from './../../utility-scripts/objectsEquality';


import classes from "./Home.module.css";

const URL = "http://178.128.196.163:3000/api/records";

// source of true
// i decide to store our state here, but ... Redux or new hooks possibility to manage store can be the option
const Home = () => {
	const [editMatcher, setEditMatcher] = useState("");
	const [fetchedData, setFetchedData] = useState("");
	const [fetchSnapshot, setFetchSnapshot] = useState()
	const [controlsValue, setControlsValue] = useState({
		name: "",
		email: "",
		age: "",
	});

	const addRecordHandler = () => {
		if (!validate(controlsValue)) return

		const objToSend = {
			data: controlsValue,
		};
		
		fetch(URL, {
			method: "PUT",
			body: JSON.stringify(objToSend),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			getData();
		});
	};

	const updateRecordHandler = (rowId) => {
		const targetObj = fetchedData.find((elem) => {
			return elem._id === rowId;
		});
		
		// console.log(fetchedData)
		// console.log(fetchSnapshot)


		// console.log(targetObj.data)
		// console.log(targetSnapshotObj.data)

		if (!validate(targetObj.data)) return
		// if (objectsEquality(targetObj.data, targetSnapshotObj.data)) {
		// 	alert('change something')
		// 	return
		// }
		// console.log(targetObj.data)
		// console.log(targetSnapshotObj.data)
		
		fetch(`${URL}/${rowId}`, {
			method: "POST",
			body: JSON.stringify({ data: targetObj.data }),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				getData();
			})
			.catch((e) => {
				alert(e);
			});
	};

	const deleteRecordHandler = (id) => {
		fetch(`${URL}/${id}`, {
			method: "DELETE",
		}).then(() => {
			getData();
		});
	};

	const inputsChange = (row, event) => {
		const { value, name } = event.target;

		// tbh, i don't like this my solution of updating inputs...
		if (row) {
			//find index of array with key we have.
			const index = fetchedData.findIndex((elem) => {
				return elem._id === row;
			});
			// updating array-like state
			setFetchedData((prev) => {
				const newArr = [...prev];
				newArr[index].data[name] = value;
				return newArr;
			});
		} else {
			// i keep 2 different state for creating new records and updating them
			setControlsValue((prev) => {
				return {
					...prev,
					[name]: value,
				};
			});
		}
	};

	const toggleEdit = (rowId) => {
		
		setEditMatcher(rowId);

		const targetSnapshotObj = fetchedData.find((elem) => {
			return elem._id === rowId
		})
		const rowData = {...targetSnapshotObj.data}

		// console.log(rowData)
		setFetchSnapshot(rowData)
		console.log(fetchSnapshot)
	};

	const getData = useCallback(() => {
		fetch(`${URL}`)
			.then((response) => response.json())
			.then((data) => {
				setFetchedData(data);
				setEditMatcher((prev) => {});
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(getData, []);

	return (
		<div className={classes.Home}>
			{!fetchedData && <h1>loading</h1>}

			<table className={classes.Table}>
				<TableHeader />
				<TableControls
					addRecord={addRecordHandler}
					inputsChange={inputsChange}
				/>
				{fetchedData
					? fetchedData.map((item) => {
							if (!item.data) {
								return null;
							}
							const tempObj = { ...item.data };
							const isEdit = editMatcher === item._id;

							// no empty field in table
							// converts '' into 'emty field'
							for (let key in tempObj) {
								if (!tempObj[key] && !isEdit) {
									tempObj[key] = "empty field";
								}
							}

							let {
								name = "no name in db",
								email = "no email in db",
								age = "no age in db",
							} = tempObj;

							return (
								<TableRow
									isEdit={isEdit}
									key={item._id}
									rowId={item._id}
									name={name}
									email={email}
									age={age}
									deleteRecord={deleteRecordHandler}
									updateRecord={updateRecordHandler}
									inputsChange={inputsChange}
									toggleEdit={toggleEdit}
								/>
							);
					  })
					: null}
			</table>
		</div>
	);
};

export default Home;
