import React from "react";
import { categories } from "../../../App";


const Form = () => {

    const onSubmit = console.log("Submitted Data.");

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category">
            <option value=""></option>
            {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
        </select> 
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
