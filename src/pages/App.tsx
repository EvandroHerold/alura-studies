import React, { useState } from 'react';
import Formulario from '../components/Form/index';
import Lista from '../components/List/index';
import Cronometro from '../components/Cronometro';
import style from './styles.module.scss';
import { Itarefas } from '../types/types';

function App() {

  const [tarefas, setTarefas] = useState<Itarefas[]>([])

  const [selecionado, setSelecionado] = useState<Itarefas>()

  function selecionaTarefa(tarefaSelecionada: Itarefas){
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function tarefaFinalizada(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(
        tarefa => {
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa
        }
      ))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa = {selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
        tarefaFinalizada = {tarefaFinalizada}
      />
    </div>
  );
}

export default App;
