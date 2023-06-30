import './CampoTexto.css'


const CampoTexto = ({ label, placeholder, obrigatorio, aoAlterado, valor }) => {

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={evento => aoAlterado(evento.target.value)}
                placeholder={placeholder}
                required={obrigatorio}
            />
        </div>
    )
}

export default CampoTexto