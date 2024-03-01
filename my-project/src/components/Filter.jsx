/*
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
*/

const Filter = ({filter,setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>

        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Canceled">Cancelados</option>
                    <option value="Pending">Pendentes</option>
                    <option value="Completed">Confirmado</option>
                </select>
            </div>

            <div>
                <p>Ordem alfabética: </p>
                <button onClick={() => setSort("Asc")}>A até Z</button>
                <button onClick={() => setSort("Des")}>Z até A</button>
            </div>
        </div>
    </div>
  )
}

export default Filter;