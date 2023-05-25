import React, { useState } from "react";
import Botao from "../Button";
import style from './form.module.scss';
import { Itarefas } from "../../types/types";
import { v4 as uuidv4 } from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<Itarefas[]>>
}

function Formulario({setTarefas} : Props){
    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState('00:00')
    function adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        )
        setTarefa('')
        setTempo('00:00')
    }
    return(
        <form action="" className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>
                    <input 
                    type="text" 
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={event => setTarefa(event.target.value)}
                    placeholder="O que você quer estudar?"
                    required/>
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input 
                    type="time" 
                    id="tempo"
                    name="tempo"
                    value={tempo}
                    onChange={event => setTempo(event.target.value)} 
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    required/>
                </div>
                <Botao type="submit" texto="Adicionar" />
            </form>
    )
}

export default Formulario
