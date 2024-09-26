import React from "react";
import Button from "./Button";

function Note({ category, content, id }) {
  return (
    <div className="note-card">
      <p className="category">{category}</p>
      <div className="note-space">
        <div className="content">{content}</div>
        <div className="buttons">
          <Button className={"edit-button"} name={"Edit"} type={""} />
          <Button className={"delete-button"} name={"Delete"} type={""} />
        </div>
      </div>
    </div>
  );
}

export default Note;
