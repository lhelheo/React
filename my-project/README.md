# README.md


# Novasce - Teste para Desenvolvedor Frontend Júnior

## Descrição do Teste

Desenvolver uma página web que você poderá ler, criar, atualizar e deletar uma lista de objetos com os seguintes tipos:

### Tecnologias Utilizadas

A aplicação Lista de Objetos foi desenvolvida utilizando a biblioteca React.js para a criação da interface do usuário e a biblioteca Tailwind CSS para estilização dos componentes. O React.js oferece uma estrutura eficiente para a criação de interfaces de usuário dinâmicas e reativas, enquanto o Tailwind CSS proporciona uma abordagem baseada em classes para estilização, permitindo uma experiência de desenvolvimento mais rápida e flexível.

Exemplo:
* [TailWindCss](https://tailwindcss.com/)
* [React](https://react.dev/)


## Dependências e Versões Necessárias

Para rodar a aplicação Lista de Objetos, é necessário ter o Node.js instalado no ambiente de desenvolvimento. Além disso, as seguintes dependências são necessárias:

* React.js - Versão: 18.2.0: Biblioteca JavaScript para criar interfaces de usuário. 
* Tailwind CSS - Versão: 3.4.1: Framework CSS utilitário para estilização de componentes.

## Como rodar o projeto ✅

Além de precisar ter insalado no computador o Node.js e o Yarn, caso decidar instalar pelo terminal utilizando Yarn em caso de erros

Para rodar a aplicação Lista de Objetos localmente em seu ambiente de desenvolvimento, siga as etapas abaixo:

Clone o repositório da aplicação do GitHub:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

Depois, rode o seguinte comando:

```
cd nome-do-repositorio
```

Instale as dependências do projeto utilizando o npm ou yarn:
```
npm install
```

Após a instalação das dependências, inicie a aplicação:
```
npm start
```

ou
```
yarn start
```

Isso iniciará a aplicação em um servidor local e abrirá automaticamente a página no seu navegador padrão.

## Como rodar os testes

Explique como rodar os testes da aplicação. Exemplo de um comando usando Makefile para rodar os testes:

```
make test
```

## ⏭️ Próximos passos

Próximo Passo: Tentar Arrumar o Tamanho e o Posicionamento do Botão de Remover Objeto
O próximo passo na evolução da aplicação Lista de Objetos pode ser tentar arrumar o tamanho e o posicionamento do botão de remover objeto. Isso pode ser feito ajustando as classes de estilo aplicadas ao botão dentro do componente Todo. Experimente modificar as classes existentes ou adicionar novas classes para alcançar o layout desejado.

# Documentação sobre o código

## Tópicos a serem comentados sobre cada arquivo do projeto

### index.jsx

```
import React from 'react'; 
/* Importa o módulo React do pacote react. Ele é necessário para definir e usar componentes React em um aplicativo.*/
import ReactDOM from 'react-dom'; 
/* ReactDOM é uma extensão do React que permite renderizar componentes React no DOM (Document Object Model) do navegador. Ele fornece métodos como ReactDOM.render() para montar componentes React no DOM.*/
import './index.css'; 
/* Importa a estilização da aplicação principal, a partir da pasta raiz*/
import App from './App'; 
/* Importa o arquivo da aplicação geral, a partir da sua pasta raiz*/

ReactDOM.render(<App />, document.getElementById("root")); 
/* Arquivo responsável por fazer o bootstrap da aplicação no navegador*/
```

### index.html

Este arquivo HTML é fundamental para o funcionamento do aplicativo React. 
Ele fornece o ambiente onde o React renderiza os componentes e controla o comportamento da página. 
O conteúdo do aplicativo React é injetado no div id="root", e a partir daí, o React assume o controle da aplicação

### tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], /* alterção importante de configuração*/
  theme: {
    extend: {},
  },
  plugins: [],
}; 

/* Adiciona os caminhos a todos os arquivos template no arquivo tailwind.config.js .
Lembrando de alterar o content para o valor abaixo, por própria recomendação de configuração
da documentação do TailWindCss
*/
```

### Filter.jsx

O componente Filter permite ao usuário selecionar um  filtro de status e/ou ordenar os itens da lista alfabeticamente.
Ele atualiza os estados filter e sort conforme a escolha do usuário, sendo possível visualizar essas mudanças.

Seletor select
Nessa parte do código, value={filter}, definindo o valor selecionado no seletor como o estado 'filter', garantindo que ele seja
sincronizado com o estado atual.
onChange={(e) => setFilter(e.target.value)}, é responsável por configurar quando o valor do seletor é alterado pelo usuário, a função
setFilter é chamada, passando como argumento o novo estado de filter

Botões de ordenação
onClick={() => setSort("Asc")} ou mesmo a opção onClick={() => setSort("Des")}, define uma função de retorno de chamada, ela será
executada quando o botão for clicado. Dessa forma, quando o botão "A até Z" ou "Z até A" for clicado a função setSort é chamada como o
argumento Asc ou Des, indicando que o itens devem ser ordenados de forma crescente ou decrescente 

### Search.jsx
Semelhante a uma classe em Java com orientação a objetos
Search.jsx é um componente da aplicação, ele é responsável por renderizar
o campo de pesquisa na interface do usuário.

Essa constante é utilizada como forma de função ela recebe as props search e setSearch,
observe que o mesmo comportamento é repetido em outros componentes da aplicação em React
Essas propriedades funcionam como uma espécie de atributo, e eles são fundamentais para o React,
essas propriedades podem ser de qualquer tipo de dado. 

O funcionamento da função é o seguinte:
Quando o usuário digita na entrada, o evento 'onChange' é acionado, ele chama a função setSearch
como o novo valor digitado pelo usuário. Dessa forma, atualizando o estado da pesquisa no componente
pai, permitindo que a interface seja atualizada.

Analisando agora o trecho onChange={(e) => setSearch(e.target.value)}
onChange é acionado quando o usuário digita uma entrada
(e) => setSearch(e.target.value) é uma função de retorno (callback), 'e' é o evento de mudança 'e.target'
'e.target.value' é o novo valor digitado pelo usuário na entrada

Ou, seja
e.target referencia o elemento que acionou o evento
e.target.value a propriedade value armazena a entrada digitada pelo usuário

Por fim, está sendo chamada a função setSearch(e.target.value) passando o novo valor digitado pelo usuário

### Todo.jsx
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

### Todoform.jsx
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

### App.jsx

O componente App controla o estado global da aplicação e renderiza a interface principal, incluindo a lista de tarefas, o formulário para adicionar novas tarefas e os componentes de filtragem e pesquisa. Ele coordena a interação do usuário com as tarefas, fornecendo funcionalidades para adicionar, remover e atualizar o status das tarefas.

Lembrando de importar os demais componentes da aplicação para o arquivo principal

Na lista todos é usado um Hook 'useState', ele permite adicionar estados a componentes funcionais
Sendo todos o estado atual e setTodos a função que permite atualizar o estado
Todos funciona como uma lista de objetos, que nesse caso seriam objetos de transportadora
Esses objetos possuem id (identificador único), title (título) e status (pendente, confirmado ou cancelado)
Portanto, quando o componente é inicialmente renderizado, o estado 'todos' é configurado com tarefas predefinidas
O estado todos pode ser posteriormente atualizado usando a função setTodos, que é retornada pelo useState. Isso permite adicionar, remover ou modificar objetos

Cada uma dessas linhas declara uma variável de estado (por exemplo, search, filter e sort) juntamente com sua respectiva função de atualização (por exemplo, setSearch, setFilter e setSort).
O primeiro argumento passado para useState é o valor inicial do estado. Nesses casos, os valores iniciais são strings vazias (""), o que significa que os estados search, filter e sort começarão vazios.
A função de atualização retornada por useState (por exemplo, setSearch, setFilter e setSort) permite modificar o valor do estado correspondente. Quando essa função é chamada com um novo valor como argumento, o estado é atualizado para esse novo valor e o componente é re-renderizado.
Esses estados podem ser utilizados para controlar o comportamento e a aparência do componente

addTodo é responsável por adicionar uma nova tarefa à lista de tarefas existente.
  Dentro da função, é criado um novo array chamado newTodos que contém uma cópia dos todos existentes (armazenados no estado todos) usando o operador spread (...todos).

Em seguida, é criado um novo objeto de tarefa que representa a nova tarefa a ser adicionada à lista. Esse objeto tem as seguintes propriedades:
id: Um identificador único gerado aleatoriamente usando Math.floor(Math.random()* 10000).
title: O título da nova tarefa, que é passado como parâmetro para a função addTodo.
status: O status da nova tarefa, que é passado como parâmetro para a função addTodo.
O novo objeto de tarefa é adicionado ao final do array newTodos.
Por fim, a função setTodos é chamada com o novo array newTodos como argumento. Isso atualiza o estado todos com a nova lista de tarefas, o que faz com que o componente seja re-renderizado para refletir as mudanças na interface

removeTodo, que é responsável por remover uma tarefa da lista de tarefas existente com base no ID da tarefa a ser removida removeTodo é uma função que recebe um parâmetro: id, que representa o ID da tarefa a ser removida.
Dentro da função, é criado um novo array chamado newTodos, que é gerado a partir do array todos (armazenado no estado) usando o método filter().
O método filter() percorre cada elemento do array todos e retorna um novo array contendo apenas os elementos que atendem à condição especificada.
Neste caso, a condição é que o id da tarefa seja diferente do id passado como parâmetro para a função removeTodo. Isso significa que apenas as tarefas cujo ID não corresponde ao ID da tarefa a ser removida serão incluídas no novo array newTodos.
O novo array newTodos, que contém todas as tarefas exceto aquela que corresponde ao ID fornecido, é armazenado no estado todos usando a função setTodos.
Isso atualiza o estado todos, removendo a tarefa específica da lista.

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

Este trecho de código é responsável por filtrar, pesquisar e ordenar a lista de tarefas antes de renderizá-las na interface do usuário, garantindo uma experiência de usuário mais organizada e personalizada.
.filter((todo) => {...}): Este método filter é usado para filtrar a lista de tarefas com base em diferentes critérios. O filtro é aplicado a cada elemento da lista (todo). Dentro da função de filtro, estamos verificando o valor do estado filter para determinar quais tarefas devem ser exibidas. Se o filtro for "All", todas as tarefas serão exibidas. Se for "Completed", apenas as tarefas com status "confirmado" serão exibidas. O mesmo princípio se aplica aos filtros "Pending" e "Canceled". Se nenhum filtro específico for aplicado, todas as tarefas serão exibidas por padrão.
.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase())): Este segundo método filter é usado para filtrar as tarefas com base em uma string de pesquisa (search). Ele filtra as tarefas cujo título contenha a string de pesquisa, independentemente de maiúsculas e minúsculas.
.sort((a, b) => {...}): Este método sort é usado para ordenar as tarefas. O critério de ordenação é determinado pelo estado sort. Se for "Asc", as tarefas serão ordenadas em ordem alfabética ascendente pelo título. Caso contrário, serão ordenadas em ordem alfabética descendente pelo título.
.map((todo) => (...)): Por fim, o método map é usado para iterar sobre a lista de tarefas filtradas, pesquisadas e ordenadas, e renderizar cada uma delas como um componente <Todo>. Cada componente <Todo> recebe como propriedade (props) os dados da tarefa, bem como as funções removeTodo e completeTodo para manipulação de tarefas específicas.
  