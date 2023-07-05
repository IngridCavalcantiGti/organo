import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';


function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',

      cor: '#57C278'
    },
    {
      nome: 'Front-End',

      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',

      cor: '#A6D157'
    },
    {
      nome: 'Devops',

      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',

      cor: '#DB6EBF'
    },
    {
      nome: 'Mobile',

      cor: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',

      cor: '#FF8A29'
    }
  ])


  const inicial = [
    {
      nome: 'Ingrid Cavalcanti',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://github.com/IngridCavalcantiGti.png',
      time: times[0].nome
    },
    {
      nome: 'Ingrid Cavalcanti',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://github.com/IngridCavalcantiGti.png',
      time: times[0].nome
    },
    {
      nome: 'Ingrid Cavalcanti',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://github.com/IngridCavalcantiGti.png',
      time: times[0].nome
    },
    {
      nome: 'Ingrid Cavalcanti',
      cargo: 'Desenvolvedora de software',
      imagem: 'https://github.com/IngridCavalcantiGti.png',
      time: times[0].nome
    },
  ]
  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log('deletando colaborador')
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <section className="times">
        <h1> Minha organização</h1>
        {times.map((time, indice) =>
          <Time
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}
          />
        )}
      </section>
      {/* adicionar rodape aqui */}
    </div>
  );
}

export default App;
