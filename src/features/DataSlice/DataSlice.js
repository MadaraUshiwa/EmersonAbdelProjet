import{ createSlice }from '@reduxjs/toolkit'
import data_json from '../../data.json'
export const dataSlice = createSlice({
 name : "data",
 initialState : {
  produits : data_json,
  panier : []
 },
 reducers : {
  Add_to_pannier : ((state,action)=>{
   state.panier = [...state.panier,action.payload]
  })
 }
})
export const {Add_to_pannier} = dataSlice.actions
export default dataSlice.reducer