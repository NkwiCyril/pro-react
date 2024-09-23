import React from "react";
import Person from "./Person";

const NameList = () => {
  let persons = [
    { name: "John", age: 46 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 35 },
  ];

  let personList = persons.map((person) => (
    <Person key={persons.indexOf(person)} person={person} />
  ));
  return <div>{personList}</div>;
};

export default NameList;
