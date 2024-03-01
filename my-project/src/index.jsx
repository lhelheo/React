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