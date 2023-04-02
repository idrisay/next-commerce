import React, { useState } from "react";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import axios from "axios";

const AddNew = () => {
  // const uniqueId = () => parseInt(Date.now() * Math.random());
  const [selectedCategory, setSelectedCategory] = useState();
  const [newCategory, setNewCategory] = useState({
    // id: uniqueId(),
    title: "",
    price: "100",
    description: "",
  });

  const handleSelectChange = (e) => {
    let _selectedCategory = categories.filter(
      (category) => e.target.value == category.id
    );
    setSelectedCategory(_selectedCategory[0]);
  };

  const handleChange = (e) => {
  
    setNewCategory({ ...newCategory, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newElm = {
      title: newCategory.title,
      price: newCategory.price,
      description: newCategory.description,
      category: selectedCategory.name,
      brand: newCategory.brand,
      image_url: newCategory.image_url,
    };

    axios.post(`${process.env.BACKEND_URL}/products`, newElm).then((res) => {

    });
  };

  return (
    <div className="flex justify-center h-screen items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-11/12 max-w-md p-4 border-2 rounded-md border-black"
      >
        <label htmlFor="title">Title</label>
        <Input
          required
          onChange={(e) => handleChange(e)}
          type="text"
          name="Title"
          id="title"
        />
        <label htmlFor="image_url">Image URL</label>
        <Input
          required
          onChange={(e) => handleChange(e)}
          type="text"
          name="image_url"
          id="image_url"
        />
        <label htmlFor="brand">Brand</label>
        <Input
          required
          onChange={(e) => handleChange(e)}
          type="text"
          name="brand"
          id="brand"
        />
        <label htmlFor="price">Price</label>
        <Input
          required
          onChange={(e) => handleChange(e)}
          type="number"
          name="Price"
          id="price"
        />

        <label htmlFor="description">Description</label>
        <Textarea
          onChange={(e) => handleChange(e)}
          type="text"
          id="description"
          maxLength="150"
          rows="4"
          required
          styele={{ resize: "none" }}
          className="resize-none"
        />

        <label htmlFor="category">Category</label>
        <select
          required
          onChange={handleSelectChange}
          name="category"
          id="category"
          defaultValue={""}
          className="border-[1px] border-purple-500 rounded-md p-2"
        >
          <option value="" disabled hidden>
            Select Movie
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNew;

const categories = [
  { id: 1, name: "men's clothing" },
  { id: 2, name: "jewelery" },
  { id: 3, name: "men's clothing" },
  { id: 4, name: "women's clothing" },
];

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
// }
