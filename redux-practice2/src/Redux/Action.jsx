export const add_Data = (data) => ({
    type: "GET_DATA",
    payload: data,
  });
  
  export const delete_Data = (id) => ({
    type: "DELETE_DATA",
    payload: id,
  });
  
  export const update_Data = (data) => ({
    type: "UPDATE_DATA",
    payload: data,
  });
  
  export const searchterm = (search) => ({  // ✅ Fix action type
    type: "SEARCH_DATA",
    payload: search,
  });
  

  export const filterstatus = (filter) =>({
    type:"FILTER_DATA",
    payload: filter,
  })

  export const set_Edit = (book) => ({
    type: "SET_EDIT",
    payload: book,
  });
  
  export const clear_Edit = () => ({
    type: "CLEAR_EDIT",
  });
  