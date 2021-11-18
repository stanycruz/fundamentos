import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})

    async function obterCliente() {
        const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const data = await res.json()
        setCliente(data)

        // fetch(`http://localhost:3000/api/clientes/${codigo}`)
        //     .then(res => res.json())
        //     .then(data => setCliente(data))
    }


    return (
        <Layout>
            <div>
                <input type="number" value={codigo}
                    onChange={e => setCodigo(e.target.value)} />
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}