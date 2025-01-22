// importa os modulos e stylos
import React from 'react';
import getData from '../api'
import styles from './styles.module/Details.module.css'

// define um tipo para a variavel recebida do componente
type childrens = {
  value: string;
}

// define um tipo para os dados recebidos da api
type dataType = {
  name: string,
  main: {
    temp:number,
    humidity: number,
  }
  weather: [{
    description: string,
    icon: string,
  }]
  wind: {
    speed: number,
  }
};

const Details = ({value}: childrens) => {

  // define um states para os dados do formulario recebido da api
  const [data, setdata] = React.useState<dataType | null>(null)

  // funcao asincrona que faz o fetch na api e pega os dados e seta na constante data
  const fetchData = async (value: string) => {
    if (value === '') return;
      try {
        const response = await fetch(getData(value));
        const res = await response.json();
        setdata(res)
      } catch (error){
        console.log(error)
      }
  }

  // usa o React.useEffect para atualizar chamar o fetchData toda vez que o valor do input mudar 
  React.useEffect(()=>{
    fetchData(value)
  },[value])

  if (!data) return null;
  return (
    <div className={styles.details}>
      <div className={styles.info}>
        <h2 className={styles.city}><i className="fa-solid fa-location-dot"></i> {data.name}</h2>
        <p className={styles.temp}>{data.main.temp.toFixed()}&deg;C</p>
        <p className={styles.description}>{data.weather[0].description} <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" /> </p>
      </div>
      <div className={styles.tempInfo}>
        <p className={styles.humidity}><i className="fa-solid fa-droplet"></i>  {data.main.humidity}%</p>
        <p className={styles.wind}><i className="fa-solid fa-wind"></i>  {data.wind.speed} km/h</p>
      </div>
    </div>
  )
}

export default Details