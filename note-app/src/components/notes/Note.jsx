import React from "react";
import Button from "./Button";

function Note() {
  return (
    <div class="note-card">
      <p class="category">{}</p>
      <div class="note-space">
        <div class="content">{}</div>
        <div class="buttons">
          <a href="/edit/= note.id ">
            <button class="edit-button">Edit</button>
          </a>
          <a href="/api/notes/delete/= note.id ">
            <button class="delete-button">Delete</button>
          </a>
          <Button className={"edit-button"} href={""} name={"Edit"} type={""} />
          <Button
            className={"delete-button"}
            href={""}
            name={"Delete"}
            type={""}
          />
        </div>
      </div>
    </div>
  );
}

export default Note;
