import AddTodo from "./component/AddTodo";

function App() {
  return (
    <div className="bg-gray-500 h-screen w-screen">
      <div className="container ">
        <h1 className="pt-10 text-center text-3xl font-semibold text-white font-serif underline underline-offset-8 ">Add Todos</h1>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
