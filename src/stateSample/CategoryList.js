import React from "react";
import CategoryOperation from "./CategoryOperation";

const CategoryList = (props) => {
  const { categories, deleteCategory, removeAll } = props;

  return (
    <>
      <ul>
        {categories &&
          categories.map((item, key) => {
            return (
              <li onClick={() => deleteCategory(item.id)} key={item.id}>
                {item.name}
              </li>
            );
          })}
      </ul>
      <CategoryOperation removeAll={removeAll} />
    </>
  );
};

export default CategoryList;
