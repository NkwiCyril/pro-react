import React from "react";
import Button from "./Button";

function Note({ note, handleDelete }) {
  return (
    <div className="note-card">
      <p className="category">{note.category}</p>
      <div className="note-space">
        <div className="content">{note.content}</div>
        <div className="buttons">
          <Button
            className={"delete-button"}
            name={"Delete"}
            type={""}
            handleClick={() => handleDelete(note.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
