import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#855566" />
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="#1f0100" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#1b6e6b" />
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#4a3b5c" />
            <Navegador texto="Conteúdo Dinâmico" destino="/dinamico" cor="#ff5f14" />
        </div>
    )
}