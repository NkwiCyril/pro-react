import React, { Component } from "react";
import logo from "../../assets/note_logo.jpg";
import Input from "./Input";
import Button from "./Button";
import Note from "./Note";
import CategoryOption from "./CategoryOption";
class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      category: "Category",
      notes: [
        {
          id: 1,
          content: "This is a sample note",
          category: "Personal",
        },
        {
          id: 2,
          content: "Believe",
          category: "Work",
        },
      ],
    };
  }

  handleInput = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  selectCategory = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  // method to add a note to the notes list
  addNote = (event) => {
    event.preventDefault();
    if (this.state.content != "" && this.state.category != "Category") {
      const newNote = {
        id: this.state.notes.length + 1,
        content: this.state.content,
        category: this.state.category,
      };
      this.setState((prevState) =>({
        notes: [...prevState.notes, newNote]
      }));
    }
  };

  // method to delete a note from the notes list
  deleteNote = () => {};

  render() {
    const noteList = this.state.notes.map((note) => {
      return (
        <Note key={note.id} content={note.content} category={note.category} />
      );
    });

    const categories = [
      { value: "", label: "Category" },
      { value: "Personal", label: "Personal" },
      { value: "Work", label: "Work" },
      { value: "Study", label: "Study" },
      { value: "Research", label: "Research" },
      { value: "Creative", label: "Creative" },
      { value: "Travel", label: "Travel" },
      { value: "Health", label: "Health" },
      { value: "Finance", label: "Finance" },
      { value: "Meeting", label: "Meeting" },
      { value: "Project", label: "Project" },
    ];

    const categoryList = categories.map((category) => {
      return (
        <CategoryOption
          key={categories.indexOf(category)}
          categories={categories}
          category={category}
        />
      );
    });

    return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt="note_pad_logo" />
        </div>
        <div className="form">
          <form action="#">
            <Input value={this.state.content} handleInput={this.handleInput} />
            <select
              name="category"
              id="category"
              title="Add note category"
              value={this.state.category}
              onChange={this.selectCategory}
              required
            >
              {categoryList}
            </select>
            <Button
              type={"submit"}
              className={"add-button"}
              name={"Add"}
              handleClick={(event) => this.addNote(event)}
            />
          </form>
          <div className="note-display">{noteList}</div>
        </div>
      </div>
    );
  }
}

export default NoteApp;
