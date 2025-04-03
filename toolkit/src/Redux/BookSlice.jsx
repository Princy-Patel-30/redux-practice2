import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  edit: null,
  search : "" ,
  filter : "all"
};

export const slice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addbook: (state, action) => {
      state.books.push({
        id: nanoid(),
        ...action.payload,
      });
    },

    deletebook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },

    setupdatebook: (state, action) => {
      state.edit = action.payload; 
    },

    editbook: (state, action) => {
        const existingBook = state.books.find((book) => book.id === action.payload.id);
        if (existingBook) {
          Object.assign(existingBook, action.payload); 
        }
        state.edit = null; 
      },

      searchbook: (state, action) =>{
       state.search = action.payload;
      },
      filter1: (state, action)=>{
        state.filter = action.payload;
      }

  },
});

export const { addbook, deletebook, setupdatebook, editbook ,searchbook, filter1 } = slice.actions;
export default slice.reducer;
