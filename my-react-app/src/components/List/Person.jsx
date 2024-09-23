import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h1>
        My name is {person.name} and I am {person.age} years old.
      </h1>
    </div>
  );
};

export default Person;
