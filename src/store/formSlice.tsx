import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from './store'
import { instance } from './../api/axios';

export interface FetchedPost  {
	userId?: number ,
    id?: number,
    title?: string,
    body?: string
}

const initialState:FetchedPost[] = []

// export const getPosts = () => dispatch => {
// 	in
// }

const formSlice = createSlice({
	name : 'posts',
	initialState,
	reducers : {
		savePosts : (state, action:PayloadAction<any>) => {
			return action.payload
		}
	}
})

export const {savePosts } = formSlice.actions

export const selectPosts = (state:RootState) => state.posts;

// export const getData2 = () => (dispatch:any) => {
// 	fetch(`${URL}`)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				dispatch(testAction(data))
// 			})
// 			.catch((err) => console.log(err));
// }


// export const selectRecords = (state:any) => state.posts
export default formSlice.reducer