import { MemoBloc } from "../MemoBlock/MemoBloc";
import "../tablero/Tablero.css";
export function Tablero({ animation, handleMemoClick, memoBlocks }) {
  //si no es un array se puede trabajar con ...props , caso contrario si es un array el que se esta recibiendo se usa dentro de llaves para que lo interprete {data}
  return (
    <main className="board">
      {memoBlocks.map((data, index) => {
        return (
          <MemoBloc
            key={`${index}_${data.emoji}`}
            memoBloc={data}
            funcionClick={handleMemoClick}
            animation={animation}
          />
        );
      })}
    </main>
  );
}
