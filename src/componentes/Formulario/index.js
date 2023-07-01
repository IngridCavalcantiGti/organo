import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'

const Formulario = ({ aoColaboradorCadastrado, times }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <CampoTexto
                    label="Nome"
                    placeholder='Digite o seu nome'
                    obrigatorio
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder='Digite o seu cargo'
                    obrigatorio
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder='Digite o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    itens={times}
                    label="Time"
                    obrigatorio
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario