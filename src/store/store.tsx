import { configureStore,Action } from '@reduxjs/toolkit'
import  formSlice  from './formSlice'
import recordSlice from './record/recordSlice'
import { ThunkAction } from 'redux-thunk'


export const store = configureStore({
	reducer : {
		posts : formSlice,
		records: recordSlice
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action>