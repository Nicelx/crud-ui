import React, { useEffect } from 'react';
import {Button} from './../../components/Button/Button';
import { Link } from 'react-router-dom';
import { TableRow } from './TableRow/TableRow';
import { noorsoftInstance } from '../../api/axios';



export const Table = () => {
	useEffect( () => {
		noorsoftInstance.get('/').then(response => {
			console.log(response)
		})
	}, [])
	
	return (
		<div>
			<Link to ='/'>Go Back</Link>
			<table>
				<thead>
					<th>Name</th>	
					<th>Email</th>	
					<th>Age</th>	
					<th><Button>Add</Button></th>	
				</thead>	
				<tbody>
					{/* <TableRow > */}
				</tbody>
			</table>						
		</div>
	);
};
