const initialState = {
  books: [],
  nextId: 1,
  searchterm: "",
  filter: "all",
  edit: null,  
};

const Data_reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      const newBook = { ...action.payload, id: state.nextId };
      return {
        ...state,
        books: [...state.books, newBook],
        nextId: state.nextId + 1,
      };

    case "DELETE_DATA":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case "UPDATE_DATA":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? { ...book, ...action.payload } : book
        ),
        edit: null, // ✅ Clear edit state after update
      };

    case "SET_EDIT":
      return {
        ...state,
        edit: action.payload, // ✅ Set book to edit
      };

    case "CLEAR_EDIT":
      return {
        ...state,
        edit: null, // ✅ Clear edit state
      };

    case "SEARCH_DATA":
      return {
        ...state,
        searchterm: action.payload,
      };

    case "FILTER_DATA":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default Data_reducer;
