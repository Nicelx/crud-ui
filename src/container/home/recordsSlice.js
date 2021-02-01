import {createSlice} from '@reduxjs/toolkit'

const URL = "http://178.128.196.163:3000/api/records";
const initialState = []

const recordsSlice = createSlice({
	name : 'records',
	initialState,
	reducers : {
		saveFetch : (state, action) => {
			state = action.payload
		}
	}
})

export const {saveFetch } = recordsSlice.actions

export const getData2 = () => dispatch => {
	fetch(`${URL}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				// dispatch(saveFetch(data))
			})
			.catch((err) => console.log(err));
}


export const selectRecords = state => state.records

export default recordsSlice.reducer