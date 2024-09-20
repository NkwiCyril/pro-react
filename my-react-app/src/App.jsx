import EventClass from "./components/EventClass";
import Message from "./components/Message";
import ParentComponent from "./components/ParentComponent";


function App() {
  return (
    <div>
      {/* <Greet name="Nkwi Cyril" heroName="Donald"></Greet> */}
      <Message />
      <EventClass />
      <ParentComponent />
    </div>
  );
}

export default App;
