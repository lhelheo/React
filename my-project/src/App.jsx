import { useState } from 'react';
import Todo from "./components/Todo";
import Todoform from './components/Todoform';
import "./index.css";
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "title": "Pedido - Transportadora Javascript",
      "status": "pendente"
    },
    {
      "id": 2,
      "title": "Pedido - Transportadora HTML",
      "status": "confirmado"
    },
    {
      "id": 3,
      "title": "Pedido - Transportadora CSS",
      "status": "cancelado"
    }
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
 
  const addTodo = (title, status) => {
    const newTodos = [...todos, 
      {
        id: Math.floor(Math.random()* 10000),
        title,
        status,
      },
    ];
    setTodos(newTodos);
  }


  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id, newStatus) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: newStatus };
      } else {
        return todo;
      }
    });
    setTodos(newTodos);
  }

  return (
    <div className="app mt-10">

      <h1>Lista de Objetos - Novasce</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

      <div className="todo-list">
        {todos 
          .filter((todo) => {
            if (filter === "All") {
              return true;
            } else if (filter === "Completed") {
              return todo.status === "confirmado";
            } else if (filter === "Pending") {
              return todo.status === "pendente";
            } else if (filter === "Canceled") {
              return todo.status === "cancelado";
            } else {
              return true; // Retorna true por padrão se nenhum filtro específico for aplicado
            }
          })
          .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            if (sort === "Asc") {
              return a.title.localeCompare(b.title);
            } else {
              return b.title.localeCompare(a.title);
            }
          })
          .map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
      </div>
      <Todoform addTodo={addTodo}/>
    </div>
  );
}

export default App;