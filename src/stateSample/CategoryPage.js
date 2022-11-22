import React, { useEffect, useState } from "react";
import CategoryList from "./CategoryList";
import axios from "axios";
import CategoryHeader from "./CategoryHeader";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  const deleteCategory = (id) => {
    let newCategories = categories.filter((q) => q.id != id);

    setCategories([...newCategories]);
  };

  const removeAll = () => {
    setCategories([]);
  };

  return (
    <>
      {/* <CategoryHeader categoryCount={categories.length} /> */}

      <CategoryList
        removeAll={removeAll}
        categories={categories}
        deleteCategory={deleteCategory}
      />
    </>
  );
};

export default CategoryPage;
