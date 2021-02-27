import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState, AppThunk} from '../store'
import { noorsoftInstance } from '../../api/axios';

export interface FetchedRecordsData  {
	name? : string,
	email?: string,
	age? : number
}
export interface FetchedRecords {
	loading: boolean
	id : string,
	data: FetchedRecordsData
}

const initialState:FetchedRecords[] = []


// export getRecords:AppThunk = () => (dispatch) => {

// }

const recordsSlice = createSlice({
	name : 'records',
	initialState,
	reducers : {
		saveRecords : (state, action:PayloadAction<any>) => {
			return action.payload
		}
	}
})

export const {saveRecords } = recordsSlice.actions

export const selectRecords = (state:RootState) => state.records;

export default recordsSlice.reducer