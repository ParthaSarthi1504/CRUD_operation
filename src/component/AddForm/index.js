import { useState } from "react";
import "./index.css";

const productList = {
  name: "",
  price: "",
  oldPrice: "",
  category: "vegetables",
  isActive: "Yes",
  description: ""
};

const AddForm = (props) => {
  const { addUser } = props;
  const [product, setProduct] = useState(productList);
  const submitData = (event) => {
    event.preventDefault();
    if (
      product.name !== "" &&
      product.price !== "" &&
      product.oldPrice !== "" &&
      product.description !== ""
    ) {
      addUser(product);
      setProduct((ps) => ({ ...ps.product, name: "" }));
      setProduct((ps) => ({ ...ps.product, price: "" }));
      setProduct((ps) => ({ ...ps.product, oldPrice: "" }));
      setProduct((ps) => ({ ...ps.product, description: "" }));
    }
  };
  const changeName = (event) => {
    setProduct({ ...product, name: event.target.value });
  };
  const changePrice = (event) => {
    setProduct({ ...product, price: event.target.value });
  };
  const changeOldPrice = (event) => {
    setProduct({ ...product, oldPrice: event.target.value });
  };
  const changeCategory = (event) => {
    setProduct({ ...product, category: event.target.value });
  };
  const changeInActive = (event) => {
    setProduct({ ...product, isActive: event.target.checked ? "Yes" : "No" });
  };
  const changeDescription = (event) => {
    setProduct({ ...product, description: event.target.value });
  };
  return (
    <div>
      <h1 className="add-form-title">Add Form</h1>
      <form onSubmit={submitData} className="add-form">
        <div className="input">
          <label className="lable-style">Product Name</label>
          <input
            type="text"
            value={product.name}
            className="input-box"
            onChange={changeName}
          />
        </div>
        <div className="input">
          <label className="lable-style">Price</label>
          <input
            type="text"
            value={product.price}
            className="input-box"
            onChange={changePrice}
          />
        </div>
        <div className="input">
          <label className="lable-style">Old Price</label>
          <input
            type="text"
            value={product.oldPrice}
            className="input-box"
            onChange={changeOldPrice}
          />
        </div>
        <div className="input">
          <label className="lable-style">Category</label>
          <select onChange={changeCategory} className="input-box">
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits & Nuts">Fruits & Nuts</option>
            <option value="Dairy & creams">Dairy & creams</option>
            <option value="Packages Food">Packages Food</option>
            <option value="Staples">Staples</option>
          </select>
        </div>
        <div className="input1">
          <input
            type="checkbox"
            name="activecheckbox"
            onChange={changeInActive}
          />
          <label className="lable-style1">isActive</label>
        </div>
        <div className="input">
          <label className="lable-style">Description</label>
          <textarea
            col="150"
            row="100"
            value={product.description}
            className="text-area"
            onChange={changeDescription}
          ></textarea>
        </div>
        <button type="submit" className="sub-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddForm;
