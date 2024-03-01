/*
O componente App controla o estado global da aplicação e renderiza a interface principal, incluindo a lista de tarefas, o formulário para adicionar novas tarefas e os componentes de filtragem e pesquisa. Ele coordena a interação do usuário com as tarefas, fornecendo funcionalidades para adicionar, remover e atualizar o status das tarefas.
*/
import { useState } from 'react';
import Todo from "./components/Todo";
import Todoform from './components/Todoform';
import "./index.css";
import Search from './components/Search';
import Filter from './components/Filter';
/* Lembrando de importar os demais componentes da aplicação para o arquivo principal*/

function App() {
  /*
  Na lista todos é usado um Hook 'useState', ele permite adicionar estados a componentes funcionais
  Sendo todos o estado atual e setTodos a função que permite atualizar o estado
  Todos funciona como uma lista de objetos, que nesse caso seriam objetos de transportadora
  Esses objetos possuem id (identificador único), title (título) e status (pendente, confirmado ou cancelado)
  Portanto, quando o componente é inicialmente renderizado, o estado 'todos' é configurado com tarefas predefinidas
  O estado todos pode ser posteriormente atualizado usando a função setTodos, que é retornada pelo useState. Isso permite adicionar, remover ou modificar objetos
  */
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

  /*
  Cada uma dessas linhas declara uma variável de estado (por exemplo, search, filter e sort) juntamente com sua respectiva função de atualização (por exemplo, setSearch, setFilter e setSort).

O primeiro argumento passado para useState é o valor inicial do estado. Nesses casos, os valores iniciais são strings vazias (""), o que significa que os estados search, filter e sort começarão vazios.

A função de atualização retornada por useState (por exemplo, setSearch, setFilter e setSort) permite modificar o valor do estado correspondente. Quando essa função é chamada com um novo valor como argumento, o estado é atualizado para esse novo valor e o componente é re-renderizado.

Esses estados podem ser utilizados para controlar o comportamento e a aparência do componente
  */
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
 
  /* addTodo é responsável por adicionar uma nova tarefa à lista de tarefas existente.
  Dentro da função, é criado um novo array chamado newTodos que contém uma cópia dos todos existentes (armazenados no estado todos) usando o operador spread (...todos).

Em seguida, é criado um novo objeto de tarefa que representa a nova tarefa a ser adicionada à lista. Esse objeto tem as seguintes propriedades:

id: Um identificador único gerado aleatoriamente usando Math.floor(Math.random()* 10000).
title: O título da nova tarefa, que é passado como parâmetro para a função addTodo.
status: O status da nova tarefa, que é passado como parâmetro para a função addTodo.
O novo objeto de tarefa é adicionado ao final do array newTodos.

Por fim, a função setTodos é chamada com o novo array newTodos como argumento. Isso atualiza o estado todos com a nova lista de tarefas, o que faz com que o componente seja re-renderizado para refletir as mudanças na interface
  */
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

  /*
  removeTodo, que é responsável por remover uma tarefa da lista de tarefas existente com base no ID da tarefa a ser removida[
  removeTodo é uma função que recebe um parâmetro: id, que representa o ID da tarefa a ser removida.

Dentro da função, é criado um novo array chamado newTodos, que é gerado a partir do array todos (armazenado no estado) usando o método filter().

O método filter() percorre cada elemento do array todos e retorna um novo array contendo apenas os elementos que atendem à condição especificada.
Neste caso, a condição é que o id da tarefa seja diferente do id passado como parâmetro para a função removeTodo. Isso significa que apenas as tarefas cujo ID não corresponde ao ID da tarefa a ser removida serão incluídas no novo array newTodos.
O novo array newTodos, que contém todas as tarefas exceto aquela que corresponde ao ID fornecido, é armazenado no estado todos usando a função setTodos.

Isso atualiza o estado todos, removendo a tarefa específica da lista.
  ]
  */
  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  /*
  completeTodo é responsável por atualizar o status de uma tarefa existente na lista de tarefas com base no ID da tarefa e no novo status fornecido. 
  completeTodo é uma função que recebe dois parâmetros: id e newStatus.

id representa o ID da tarefa que será atualizada.
newStatus representa o novo status que a tarefa terá após a atualização.
Dentro da função, é criado um novo array chamado newTodos, que é gerado a partir do array todos (armazenado no estado) usando o método map().

O método map() percorre cada elemento do array todos e retorna um novo array com base em uma transformação aplicada a cada elemento.
Para cada tarefa no array todos, é verificado se o ID da tarefa corresponde ao ID fornecido como parâmetro.
Se o ID corresponder, significa que encontramos a tarefa que precisa ser atualizada. Nesse caso, retornamos um novo objeto que representa a tarefa atualizada, utilizando o spread operator (...) para manter as propriedades existentes da tarefa e substituir apenas o status pelo novo newStatus.
Se o ID não corresponder, significa que não é a tarefa que precisamos atualizar, então apenas retornamos a tarefa inalterada.
Isso resulta em um novo array newTodos, onde a tarefa com o ID correspondente foi atualizada com o novo status, enquanto as outras tarefas permanecem inalteradas.
O novo array newTodos, que agora reflete as atualizações feitas na tarefa, é armazenado no estado todos usando a função setTodos.

Isso atualiza o estado todos, refletindo as alterações feitas na lista de tarefas.
  */
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

  /*
  
  */
  return (
    <div className="app mt-10">

      <h1>Lista de Objetos - Novasce</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

      <div className="todo-list">
        {todos 
        /*
        Este trecho de código é responsável por filtrar, pesquisar e ordenar a lista de tarefas antes de renderizá-las na interface do usuário, garantindo uma experiência de usuário mais organizada e personalizada.
        .filter((todo) => {...}): Este método filter é usado para filtrar a lista de tarefas com base em diferentes critérios. O filtro é aplicado a cada elemento da lista (todo). Dentro da função de filtro, estamos verificando o valor do estado filter para determinar quais tarefas devem ser exibidas. Se o filtro for "All", todas as tarefas serão exibidas. Se for "Completed", apenas as tarefas com status "confirmado" serão exibidas. O mesmo princípio se aplica aos filtros "Pending" e "Canceled". Se nenhum filtro específico for aplicado, todas as tarefas serão exibidas por padrão.

.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase())): Este segundo método filter é usado para filtrar as tarefas com base em uma string de pesquisa (search). Ele filtra as tarefas cujo título contenha a string de pesquisa, independentemente de maiúsculas e minúsculas.

.sort((a, b) => {...}): Este método sort é usado para ordenar as tarefas. O critério de ordenação é determinado pelo estado sort. Se for "Asc", as tarefas serão ordenadas em ordem alfabética ascendente pelo título. Caso contrário, serão ordenadas em ordem alfabética descendente pelo título.

.map((todo) => (...)): Por fim, o método map é usado para iterar sobre a lista de tarefas filtradas, pesquisadas e ordenadas, e renderizar cada uma delas como um componente <Todo>. Cada componente <Todo> recebe como propriedade (props) os dados da tarefa, bem como as funções removeTodo e completeTodo para manipulação de tarefas específicas
        */
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