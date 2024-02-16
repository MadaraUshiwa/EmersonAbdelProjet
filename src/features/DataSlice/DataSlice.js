import{ createSlice }from '@reduxjs/toolkit'
import data_json from '../../data.json'
export const dataSlice = createSlice({
 name : "data",
 initialState : {
  produits : data_json,
  panier : []
 },
 reducers : {
    Add_to_pannier: (state, action) => {
      const itemIndex = state.panier.findIndex(
        (item) => item.id === action.payload.id
      );
  
      if (itemIndex >= 0) {
        state.panier[itemIndex].quantite += 1;
      } else {
        state.panier.push({ ...action.payload, quantite: 1 });
      }  
    },
    increaseQuantity: (state, action) => {
        const itemIndex = state.panier.findIndex(
          (item) => item.id === action.payload.id
        );
    
        if (itemIndex >= 0) {
          state.panier[itemIndex].quantite += 1;
        }
      },
    DecreseQuantity: (state, action) => {
        const itemIndex = state.panier.findIndex(
          (item) => item.id === action.payload.id
        );
    
        if (itemIndex >= 0) {
          state.panier[itemIndex].quantite -= 1;
        }
      },  
    removeFromCart: (state, action) => {
        state.panier = state.panier.filter(
          (item) => item.id !== action.payload.id
        );
    },
  },
})

export const { Add_to_pannier, increaseQuantity, removeFromCart, DecreseQuantity } = dataSlice.actions;
export default dataSlice.reducer