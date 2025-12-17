export default function ExemploJSX03() {

    const numero = 18
    const numeroPar = numero % 2 === 0

    function renderizarParOuImpar(numero: number) {
        if (numero % 2 === 0) {
            return <span className="text-green-500">Par</span>
        } else {
            return <span className="text-red-500">Ímpar</span>
        }
    }

    return (
        <div className="container">
            <div className="exercicio">
                <h1>Entendendo o JSX #03</h1>
                <div className="conteudo">
                    {/* IF/ELSE */}
                    {numeroPar ? (
                        <span className="text-green-500">Par</span>
                    ) : (
                        <span className="text-red-500">Ímpar</span>
                    )}

                    {/* IF */}
                    {numeroPar && (
                        <span>O resto da divisão por 2 é igual a zero!</span>
                    )}

                    {renderizarParOuImpar(numero)}
                </div>
            </div>
        </div>
    )
}