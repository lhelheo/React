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
