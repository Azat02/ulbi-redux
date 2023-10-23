import React from "react";
import TodoLIst from "./components/TodoLIst";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <UserList />
      <hr />
      <TodoLIst />
    </div>
  );
}

export default App;
