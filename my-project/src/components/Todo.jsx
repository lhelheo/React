/*
O componente Todo é responsável por exibir o título e o status da tarefa, permitindo ao usuário alterar o status e remover a tarefa conforme necessário.

Propriedades (Props):
todo: Representa os detalhes da tarefa específica sendo renderizada. É passado como uma propriedade para o componente.
removeTodo: Uma função que será chamada quando o botão de remoção da tarefa for clicado. Ela recebe o id da tarefa como argumento.
completeTodo: Uma função que será chamada quando o status da tarefa for alterado. Ela recebe o id da tarefa e o novo status como argumentos.

Funções Auxiliares:
getStatusColor(): Esta função determina a cor de fundo da tarefa com base no seu status. Ela é chamada para definir o estilo da div que envolve a tarefa. A cor de fundo é definida de acordo com o status da tarefa, utilizando uma instrução switch.

Manipulação de Eventos:
handleStatusChange(e): Esta função é chamada quando o usuário altera o status da tarefa selecionando uma opção no seletor. Ela chama a função completeTodo passando o id da tarefa e o novo status selecionado como argumentos.

Renderização:
O componente renderiza uma div com a classe todo, que contém o título e o status da tarefa.
A cor de fundo da div é definida dinamicamente com base no status da tarefa, usando a função getStatusColor().
Dentro da div, há uma seção div com a classe content, que exibe o título e o status da tarefa.
Abaixo da seção content, há outra seção com uma seleção de status e um botão de remoção.
A seleção de status permite ao usuário alterar o status da tarefa. Seu valor é vinculado ao status da tarefa atual e a função handleStatusChange é chamada quando ocorre uma alteração.
O botão de remoção permite ao usuário remover a tarefa da lista. Quando clicado, ele chama a função removeTodo passando o id da tarefa como argumento.
*/
import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  // Função para definir a classe de acordo com o status da tarefa
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
