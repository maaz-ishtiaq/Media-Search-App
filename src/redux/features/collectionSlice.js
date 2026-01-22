import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from 'react-toastify';


const initialState  = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
         addtocollection(state,action){
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items));
                return; 
            }
           
         },
         removecollection(state,action){
            state.items = state.items.filter((item)=>item.id !== action.payload.id)
            localStorage.setItem('collection', JSON.stringify(state.items));
            
         },
         clearcollection(state){
            state.items = []
            localStorage.removeItem('collection')
            
         },
         addedToast: () => {
            toast.success('Added to Collection ✅', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast: () => {
            toast.error('Removed from Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
})

export const {addtocollection,removecollection,clearcollection,addedToast,removeToast} = collectionSlice.actions
export default collectionSlice.reducer