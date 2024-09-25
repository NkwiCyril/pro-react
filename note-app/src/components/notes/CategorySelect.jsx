import React from "react";

function CategorySelect({ categoryList}) {
  return (
    <> 
      <select name="category" id="category" title="Add note category"  required>
        {categoryList}
      </select>
    </>
  );
}

export default CategorySelect;
