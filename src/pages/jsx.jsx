export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>
    const obj = { nome: 'Jao', idade: 30 }

    function subtitulo() {
        return <h2>{'hadouken!!!'.toUpperCase()}</h2>
    }

    return (
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify(obj)}
            </p>
        </div>
    )
}