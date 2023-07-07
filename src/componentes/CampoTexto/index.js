import './CampoTexto.css'


const CampoTexto = ({ type = 'text', label, placeholder, obrigatorio, aoAlterado, valor, }) => {

    return (
        <div className={`campo-texto campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                placeholder={placeholder}
                required={obrigatorio}
            />
        </div>
    )
}

export default CampoTexto