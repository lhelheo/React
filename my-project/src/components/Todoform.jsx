/*
O componente Todoform é responsável por fornecer um formulário onde o usuário pode inserir o título e o 
status de uma nova tarefa. Quando o formulário é enviado, a função addTodo é chamada para adicionar a 
tarefa à lista existente.

Estado Local:
const [title, setTitle] = useState(""): Define um estado local title para armazenar o título da tarefa. O useState inicializa o estado com uma string vazia.
const [status, setStatus] = useState(""): Define um estado local status para armazenar o status da tarefa. Também é inicializado com uma string vazia.

Função de Submissão:
const submit = (e) => { ... }: Define a função de submissão do formulário. Ela é chamada quando o formulário é enviado.
e.preventDefault(): Realiza a prevenção do comportamento padrão de envio do formulário, que seria recarregar a página.
if (!title || !status) return;: Verifica se tanto o título quanto o status foram preenchidos. Se algum deles estiver vazio, a função retorna sem fazer nada.
addTodo(title, status): Chama a função addTodo recebida como propriedade, passando o título e o status da nova tarefa como argumentos.
setTitle("") e setStatus(""): Limpa os estados title e status, redefinindo-os como strings vazias após a submissão do formulário para auxiliar em um próxima submissão.

Renderização do Formulário:
O formulário é renderizado com um campo de entrada (input) para o título da tarefa e um seletor (select) para o status.
Os valores dos campos são vinculados aos estados locais title e status, garantindo que sejam atualizados conforme o usuário interage com o formulário.
Quando o usuário digita no campo de entrada ou seleciona uma opção no seletor, os estados title e status são atualizados com os valores correspondentes.
Ao enviar o formulário, a função submit é chamada, desencadeando o processo de criação de uma nova tarefa.
*/

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