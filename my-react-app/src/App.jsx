import Form from "./components/ControlledComponents/Form";
import Counter from "./components/Counter";
import EventClass from "./components/EventClass";
import FormApp from "./components/Form/FormApp";
import PostForm from "./components/HTTP/PostForm";
import PostList from "./components/HTTP/PostList";
import NameList from "./components/List/NameList";
import Inline from "./components/List/Styling/Inline";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";
import UserGreeting from "./components/UserGreeting";


function App() {
  return (
    <div>
      {/* <Greet name="Nkwi Cyril" heroName="Donald"></Greet> */}
      {/* <Message /> */}
      {/* <EventClass /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <FormApp /> */}
      {/* <Counter /> */}
      {/* <NameList /> */}
      {/* <Inline primary={true}/> */}
      {/* <Form /> */}
      {/* <RefsDemo /> */}
      {/* <PostList /> */}
      <PostForm/>
    </div>
  );
}

export default App;
