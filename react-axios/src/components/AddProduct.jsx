import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddProduct() {
  const [state, setState] = useState([]);

  //Add Product
  const postProduct = () =>
    axios
      .post("https://dummyjson.com/products/add", { title: state})
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

  return (
    <>
      <div>Add Product</div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter Title"
      />
      <button onClick={postProduct}>Add Product</button>
    </>
  );
}
