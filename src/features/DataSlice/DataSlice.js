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
   // switch (action.payload.todo) {
   //  case 'verify':
   //    for (let i = 0; i < panier.length; i++) {
   //      if (panier[i].id === action.payload.value.id) {
   //       state.panier[i].quantite +=1

   //      }
   //    }
   //   break;
   
   //  default:
   //   break;
   // }
   state.panier = [...state.panier,action.payload]
  })
 }
})
export const {Add_to_pannier} = dataSlice.actions
export default dataSlice.reducer