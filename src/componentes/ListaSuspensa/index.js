import './ListaSuspensa.css'

const ListaSuspensa = ({ label, itens, obrigatorio, valor, aoAlterado }) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                required={obrigatorio}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
            >
                {itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa