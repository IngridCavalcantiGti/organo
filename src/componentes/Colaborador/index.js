import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    function checkUrl(url) {

        let regex = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;
        url.match(regex) ? colaborador.imagem = url : colaborador.imagem = '/imagens/no-image-available.jpg'
        return url;
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={checkUrl(colaborador.imagem)} alt={colaborador.nome} />
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavorito} color={"#FF0000"} />
                        : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador