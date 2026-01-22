import {createSlice} from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name : 'search',
    initialState:{
        query:'',
        activeTabs: 'Photos',
        results: [],
        loading: false,
        error: null
    },
    reducers:{
        setQuery(state,action){
            state.query = action.payload
        },
        setActiveTabs(state,action){
            state.activeTabs = action.payload
        },
        setResults(state,action){
            state.results = action.payload
            state.loading = false;
        },
        setLoading(state){
            state.loading = true
            state.error = false;
        },
        setErrors(state,action){
            state.error = action.payload
            state.loading = false
        }

    }
})

export const {setActiveTabs,setResults,setLoading,setQuery,setErrors} = searchSlice.actions
export default searchSlice.reducer