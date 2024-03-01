import { useState } from "react";

const Todoform = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  const submit = (e) =>{
    e.preventDefault();
    console.log(title, status);
    if(!title || !status) return;
    addTodo(title,status);
    setTitle("");
    setStatus("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa:</h2>
      <form onSubmit={submit}>
        <input type="text" 
          placeholder="Digite o nome do objeto"
          value = {title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Selecione um status</option>
          <option value="cancelado">Cancelado</option>
          <option value="pendente">Pendente</option>
          <option value="confirmado">Confirmado</option>
        </select>
        <button type="submit" class="bg-[#00666C] text-white px-4 py-2 rounded-md cursor-pointer 
        opacity-80 mr-4 transition duration-300 hover:opacity-100">
          Criar tarefas
        </button>
      </form>
    </div>
  );
};
/* o React só tem um componente pai por regra*/
export default Todoform