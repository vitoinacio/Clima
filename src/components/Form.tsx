// importa os modulos do react e o style css
import React, { FormEvent } from "react"
import styles from './styles.module/Form.module.css'

// define o typo da variavel recebida
type childrens = {
  setValue: (value: string) => void,
}

const Form = ({setValue}: childrens) => {
  // define um ref para o formulario
  const ref = React.useRef<HTMLFormElement>(null)

  // funcao que evita o default do submit e passa o valor do input para a constante city usando o ref  
  const handleSubmit = (event: FormEvent) =>{
    event.preventDefault();
    const city = ref.current?.city?.value;

    // seta o valor no value
    setValue(city);
  }

  return (
    <form className={styles.form} ref={ref} onSubmit={handleSubmit}>
      <input type="text" id="city" placeholder="Digite o nome da Cidade"/>
      <button type="submit"><i className="Fa-Search">Buscar</i></button>
    </form>
  )
}

export default Form