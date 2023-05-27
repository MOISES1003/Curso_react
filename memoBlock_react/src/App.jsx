import { useState, useEffect } from "react";
import { Tablero } from "./components/tablero/tablero";

const emojiList = [..."⚔️🌀🧸🔥🐍💩👾🎩"]; //los 3 puntos es para decir que el array se represente como lista y asi se pueda mapear

function App() {
  const [memoblobarajas, setMemoBlocBarajas] = useState([]);
  const [animation,setAnimation]=useState(false);
  const [selectMemoBlock,setSelectMemoBlock] = useState(null);


  useEffect(() => {
    const barajaEmogiList = barajarArray([...emojiList,...emojiList]);
    setMemoBlocBarajas(
      barajaEmogiList.map((emoji, index) => ({
        index: index,
        emoji,
        flipped: false,
      }))
    );
  }, []);
  const barajarArray = (a) => {
    for (let i = a.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
      console.log(a);
    }
    return a;
  };
  const manejarMemoClick = memoBloc=>{
    const MemoBlockInvertido = {...memoBloc,flipped:true}
    let memoBloquesBarajaCopy = [...memoblobarajas]
    memoBloquesBarajaCopy.splice(memoBloc.index,1,MemoBlockInvertido);


    setMemoBlocBarajas(memoBloquesBarajaCopy);
    if(selectMemoBlock === null){
      setSelectMemoBlock(memoBloc);
    }else if(selectMemoBlock.emoji === memoBloc.emoji){
      setSelectMemoBlock(null)
    }else{
      setAnimation(true)
      setTimeout(() => {
        memoBloquesBarajaCopy.splice(memoBloc.index,1,memoBloc);
        memoBloquesBarajaCopy.splice(selectMemoBlock.index,1,selectMemoBlock);
        setMemoBlocBarajas(memoBloquesBarajaCopy);
        setSelectMemoBlock(null);
        setAnimation(false);
      }, 1000);
    }
    
  }
  return <Tablero memoBlocks={memoblobarajas} handleMemoClick={manejarMemoClick} animation={animation} />;
}

export default App;
