import { configureStore } from '@reduxjs/toolkit'
import  recordsSlice  from './container/home/recordsSlice'


export default configureStore({
	reducer : {
		records : recordsSlice
	}
})