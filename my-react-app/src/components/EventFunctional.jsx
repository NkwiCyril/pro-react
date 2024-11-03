function Event() {

  function clickHandler() {
    console.log('I have been clicked');
    
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default Event;
