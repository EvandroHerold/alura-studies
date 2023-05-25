import React, {useState} from "react";
import style from './list.module.scss'
import Item from "./Item";
import { Itarefas } from "../../types/types";

interface Props {
    tarefas: Itarefas[]
    selecionaTarefa: (tarefaSelecionada: Itarefas) => void
}

function Lista({ tarefas, selecionaTarefa }: Props){
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Atividades do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista
