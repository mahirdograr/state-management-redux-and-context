import React from "react";

const CategoryOperation = ({ removeAll }) => {
  return (
    <>
      <button onClick={() => removeAll()}>Remove All</button>
    </>
  );
};

export default CategoryOperation;
