import Botao from "../Button";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefas } from "../../types/types";
import { useEffect, useState } from "react";

interface Props {
    selecionado: Itarefas | undefined
    tarefaFinalizada: ()=> void
}

export default function Cronometro({selecionado, tarefaFinalizada} : Props){
    const [tempo, setTempo] = useState<number>()

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(String(selecionado.tempo)))
        }
    }, [selecionado])

    function regressiva(contador: number = 0){
        setTimeout(() =>{
            if(contador > 0){
                setTempo (contador - 1)
                return regressiva(contador - 1)
            }
            tarefaFinalizada()
        }, 1000)
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma atividade e inicie o cronômetro:</p>
            <div className={style.relogioWrapper}>
              <Relogio tempo={tempo}/>  
            </div>
            <Botao onClick={()=> regressiva(tempo)} texto="Iniciar"/>
        </div>
    )
}