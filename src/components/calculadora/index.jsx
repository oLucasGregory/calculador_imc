import { useState } from "react"
import './index.css'


const Formulario = () => {

    const[altura, setAltura] = useState(0);
    const[peso, setPeso] = useState(0);
    const[resultado, setResultado] = useState(0)

    console.log(altura)
    console.log(peso)

    const resultadoIMC = () =>{
        const imc = peso / (altura*altura)
        if(imc >= 1){
            return(
                <h2>Seu IMC é: {imc.toFixed(2)}</h2>
            )
        }else{
            return(
                <h2>Seu IMC é: </h2>
            )
        }
        
    }

   
    
    
  
    return(
        <div className="container">
        <h1>Calculadora IMC</h1>
        <input type="number" placeholder="Digite a altura" onChange={evento => setAltura(evento.target.value)} />
        <input type="number" placeholder="Digite o peso " onChange={evento => setPeso(evento.target.value)}  />
        {resultadoIMC()}
        
        <table>
            <thead>
                <tr>
                   <th>Resultado</th>
                    <th>Sintuação</th>
                </tr>
            </thead>
            <tbody >
                <tr className="item" >
                    <td>Abaixo de 17</td>
                    <td>Muito abaixo do peso</td>
                </tr>
                <tr >
                    <td>Entre 17 e 18,49</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr >
                    <td>Entre 18,5 e 24,99</td>
                    <td>Peso normal</td>
                </tr>
                <tr >
                    <td>Entre 25 e 29,99</td>
                    <td>Acima do peso</td>
                </tr>
                <tr >
                    <td>Entre 30 e 34,99</td>
                    <td>Obesidade I</td>
                </tr>
                <tr >
                    <td>Entre 35 e 39,99</td>
                    <td>Obesidade II (severa)</td>
                </tr>
                <tr >
                    <td>Acima de 40</td>
                    <td>Obesidade III (mórbida)</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Formulario