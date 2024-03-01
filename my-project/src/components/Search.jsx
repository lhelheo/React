/* Semelhante a uma classe em Java com orientação a objetos
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
*/


const Search = ({search, setSearch}) => {
  return <div className="search">
    <h2>Pesquisar:</h2>
    <input 
    type="text" 
    value={search} 
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Digite sua pesquisa..."
    />
  </div>
};

export default Search