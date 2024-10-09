import Form from "./components/ControlledComponents/Form";
import EventClass from "./components/EventClass";
import FormApp from "./components/Form/FormApp";
import Array from "./components/Hooks/Array";
import Counter from "./components/Hooks/counter";
import Object from "./components/Hooks/Object";
import PostForm from "./components/HTTP/PostForm";
import PostList from "./components/HTTP/PostList";
import NameList from "./components/List/NameList";
import Inline from "./components/List/Styling/Inline";
import ParentComponent from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";
import UserGreeting from "./components/UserGreeting";
import "./index.css"


function App() {
  return (
    <div className="App">
      {/* <Greet name="Nkwi Cyril" heroName="Donald"></Greet> */}
      {/* <Message /> */}
      {/* <EventClass /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <FormApp /> */}
      {/* <NameList /> */}
      {/* <Inline primary={true}/> */}
      {/* <Form /> */}
      {/* <RefsDemo /> */}
      {/* <PostList /> */}
      {/* <PostForm/> */}

      {/* HOOKS */}
      <Counter />
      <Object />
      <Array />
    </div>
  );
}

export default App;
