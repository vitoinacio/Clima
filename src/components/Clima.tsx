// importa os componentes e os modulos css
import React from "react";
import Form from "./Form"
import Details from "./Details";
import styles from './styles.module/Clima.module.css'

const Clima = () => {
  // define um states para o valor digitado no campo de input do componente Form
  const [value, setValue] = React.useState<string>('');

  return (
    <div className={styles.container}>
      <Form setValue={setValue}/>
      <Details value={value}/>
    </div>
  )
}

export default Clima