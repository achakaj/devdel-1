import React from "react";
import List from "./components/List";
import Myform from "./components/Myform";

function App() {
  return (
    <div className="App bg-gray-900 w-screen min-h-screen flex content-center justify-center">
      <div>
      <Myform/>
      <List/>
      </div>
    </div>
  );
}

export default App;
