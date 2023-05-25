import "../MemoBlock/MemoBlock.css";

export function MemoBloc({animation,funcionClick, memoBloc}) {
  return (
    <div className="memo-block" onClick={()=>!memoBloc.flipped && !animation && funcionClick(memoBloc) }>
      <div className={`memo-block-inner ${memoBloc.flipped && "memo-block-flipped"}`}>
        <div className="memo-block-front"></div>
        <div className="memo-block-back">
            {memoBloc.emoji}
        </div>
      </div>
    </div>
  );
}
