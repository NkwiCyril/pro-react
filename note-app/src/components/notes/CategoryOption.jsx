import React from "react";

function CategoryOption({ categories, category }) {
  return (
    <>
      <option key={categories.indexOf(category)} value={category.value}>
        {category.label}
      </option>
    </>
  );
}
export default CategoryOption;
