import ChuckNorisJoke from "@/components/estado/ChuckNorisJoke";
import Titulo from "@/components/template/Titulo";

export default function EstadoBasico02() {
  return (
    <div className="flex flex-col gap-7">
      <Titulo
        principal="Usando UseEffect #01"
        secundario="Exemplo de gerenciamento de estado com React"
      />
      <div className="flex flex-col gap-10">
        <ChuckNorisJoke />
        <ChuckNorisJoke />
      </div>
    </div>
  );
}
