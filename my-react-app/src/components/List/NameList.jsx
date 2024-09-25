import React from "react";
import Person from "./Person";

const NameList = () => {
  let persons = [
    { id: 1, name: "John", age: 46 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Mike", age: 35 },
  ];

  let personList = persons.map((person, index) => (
    
    <Person key={index} person={person} />
  ));
  return <div>{personList}</div>;
};

export default NameList;
