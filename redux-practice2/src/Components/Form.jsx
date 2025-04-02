import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { add_Data, update_Data, clear_Edit } from "../Redux/Action";

const Form = () => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.edit);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (edit) {
      reset(edit);
    }
  }, [edit, reset]);

  const onSubmit = (data) => {
    if (edit) {
      dispatch(update_Data({ ...edit, ...data }));
      dispatch(clear_Edit()); 
    } else {
      dispatch(add_Data(data)); 
    }
    reset();
  };

  return (
    <div>
      <h1>{edit ? "Edit Book" : "Add Book"}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Title:</label>
        <input type="text" placeholder="Enter book title" {...register("Title")} />

        <label>Author:</label>
        <input type="text" placeholder="Enter author name" {...register("Author")} />

        <label>Read Status:</label>
        <label>
          <input type="radio" value="true" {...register("readStatus", { required: true })} />
          True
        </label>
        <label>
          <input type="radio" value="false" {...register("readStatus", { required: true })} />
          False
        </label>

        <label>Category:</label>
        <select {...register("category")}>
          <option value="">Select category</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="sci-fi">Sci-fi</option>
        </select>

        <button type="submit">{edit ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default Form;
