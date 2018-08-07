import React from "react";

const Home = () => {
  return (
    <div>
      <div>This is Jovi's Home component.</div>
      <button onClick={() => console.log("Button pressed!")}>
        Press me please...
      </button>
    </div>
  );
};

export default Home;
