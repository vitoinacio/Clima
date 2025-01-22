// define as variaveis de api apiKey como a chave de acesso da api
export const apiKey = 'f109b1f91bd7db942dba64ea8e2e8eb1';


// define a funcao que recebe uma string e une a chave e a cidade para a busca
const getData = (city: string) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
}

export default getData;