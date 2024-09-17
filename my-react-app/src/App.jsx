import Card from "./Card/Card";
import List from "./List";
import UserGreeting from "./UserGreeting";

var users = [
  { name: "Innovator X", description: "A forward-thinking entrepreneur", isStudent: false },
  // { name: "Visionary Y", description: "A leader in tech innovation", isStudent: true },
  // { name: "Explorer Z", description: "A creative problem-solver", isStudent: false},
  // { name: "Pioneer A", description: "An early adopter of new ideas", isStudent: false},
  // { name: "Creator B", description: "An artist with a flair for design", isStudent: true},
];

function App() {
  return (
    <div>
    {
      users.map((user) => (
        <Card
          name={user.name}
          description={user.description}
          isStudent={user.isStudent}
        />
      ))
    }
    <UserGreeting isLoggedIn={true} username="Nkwi Cyril"/>
    <List />
    </div>
  );
}

export default App;
