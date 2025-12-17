export default function PrimeiroComponente() {
    return (
        <div className="flex flex-col gap-3 p-8">
            <div>
                <h1 className="text-3xl font-black">Primeiro componente</h1>
                <p className="text-sm text-zinc-400">Subtítulo da nossa página</p>
            </div>
            <div>
                <span>Conteúdo</span>
            </div>
            <button className="botao vermelho self-start">
                Salvar
            </button>
        </div>
    )
}