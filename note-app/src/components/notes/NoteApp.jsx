import React, { Component } from "react";
import logo from "../../assets/note_logo.jpg";
import Input from "./Input";
import Button from "./Button";
import Note from "./Note";
import CategorySelect from "./CategorySelect";
class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      category: "Category",
    };
  }

  handleInput = (event) => {
    this.setState({});
  };

  selectCategory = (event) => {
    this.setState({ category: event.target.value });
  };

  render() {
    let categories = [
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

    let categoryList = categories.map((category) => {
      <option key={categories.indexOf(category)} value={category.value}>
        {category.label}
      </option>;
    });

    return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt="note_pad_logo" />
        </div>
        <div className="form">
          <form action="/api/notes" method="POST">
            <Input value={this.state.content} handleInput={this.handleInput} />
            {/* <CategorySelect categoryList={categoryList}/> */}
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
              href={""}
            />
          </form>
          <div className="note-display">{/* <Note /> */}</div>
        </div>
      </div>
    );
  }
}

export default NoteApp;
