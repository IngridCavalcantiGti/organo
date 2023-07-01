import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria }) => {

    const css = { backgroundColor: corSecundaria }
    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        </section>
    )
}


export default Time