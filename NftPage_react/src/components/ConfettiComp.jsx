import {useWindowSizes} from "react-use-window-sizes"
import Confetti from 'react-confetti'

export function ConfettiComp(){
  const { width, height } = useWindowSizes()
    return (
      <Confetti
      numberOfPieces={180}
      gravity={0.2}
        width={width}
        height={height}
      />
    )
}