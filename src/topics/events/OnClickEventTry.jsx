function OnClickEventTry(){

  function handleClick() {
    alert("eg of onclick event try!");
  }

  return (
    <>
      <h2>Example of onClick event</h2>
      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default OnClickEventTry;