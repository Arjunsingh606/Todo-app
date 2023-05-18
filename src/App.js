import './App.css';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';
import UseSateobject from './Component/UseSateobject';


function App() {

  return (
    <div className="App">
    <TodoList />
    <TodoInput/>
    <UseSateobject/>
    </div>
  );
}

export default App;
