import React, { useState } from "react";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";

const AddNew = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [newCategory, setNewCategory] = useState({
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
    console.log(e.target.value, e.target.id);
    setNewCategory({ ...newCategory, [e.target.id]: e.target.value });
  };

  console.log(newCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('handleSubmit')
  }

  return (
    <div className=" flex justify-center h-screen items-center ">
      <form onSubmit={handleSubmit} className="flex flex-col w-11/12 max-w-md p-4 border-2 rounded-md border-black">
        <label htmlFor="title">Title</label>
        <Input
        required
          onChange={(e) => handleChange(e)}
          type="text"
          name="Title"
          id="title"
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
          cols="50"
          required
          className="resize-none"
        />

        <label htmlFor="category">Category</label>
        <select
        required
          onChange={handleSelectChange}
          name=""
          id=""
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
