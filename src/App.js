import { useState } from "react"

export default function App(){

const [numero, setNumero] = useState(0)

function aumentar() {
    setNumero(numero + 1)
    console.log(numero)
}
function diminuir() {
    setNumero(numero - 1)
    console.log(numero)
}
function aumentarD(){
    setNumero(numero + 10)
    console.log(numero)
}
function diminuirD(){
    setNumero(numero - 10)
    console.log(numero)
}
function aumentarC(){
    setNumero(numero + 100)
    console.log(numero)
}
function diminuirC(){
    setNumero(numero - 100)
    console.log(numero)
}


    return <section>
    <h1>Contador</h1>
    <p>{numero}</p>
    <button onClick={aumentar}>mais (1)</button>
    <button onClick={diminuir}>menos (1)</button>
    <button onClick={aumentarD}>mais (10)</button>
    <button onClick={diminuirD}>menos (10)</button>
    <button onClick={aumentarC}>mais (100)</button>
    <button onClick={diminuirC}>menos (100)</button>
    </section>
}