import TodoList from "./TodoList";
function App() {
  return (
    <div>
      <TodoList />
      <input type="text" />
      <button>Add Item</button>
      <button>Clear Complete</button>
      <p>0 left to do</p>
    </div>
  );
}

export default App;
