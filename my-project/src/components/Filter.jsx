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