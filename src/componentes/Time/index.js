import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, corDeFundo }) => {

    const css = { backgroundColor: corSecundaria }
    return (
        (colaboradores.length > 0) &&
        <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={corPrimaria}
                    />
                )}
            </div>
        </section>
    )
}


export default Time