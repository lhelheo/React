import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const getStatusColor = () => {
    switch (todo.status) {
      case 'confirmado':
        return '#c4ffce';
      case 'pendente':
        return '#fffdc4';
      case 'cancelado':
        return '#ffc4c4';
      default:
        return '';
    }
  };

  const handleStatusChange = (e) => {
    completeTodo(todo.id, e.target.value);
  };

  return (
    <div className="todo" style={{ backgroundColor: getStatusColor() }}>
      <div className="content">
        <p>{todo.title}</p>
        <p className="status">{todo.status}</p>
      </div>
      <div class="flex flex-col justify-between h-full">
        <select class="p-1 mb-5 border border-gray-300 rounded"
          className="status-select"
          value={todo.status}
          onChange={handleStatusChange}
        >
          <option value="pendente">Pendente</option>
          <option value="confirmado">Confirmado</option>
          <option value="cancelado">Cancelado</option>
        </select>
        <button class="bg-red-500 text-white text-sm px-2 py-3 rounded-md cursor-pointer opacity-80 transition duration-300" className="remove" onClick={() => removeTodo(todo.id)}>x</button>
      </div>
    </div>
  );
};

export default Todo;
