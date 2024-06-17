import { useDispatch, useSelector } from "react-redux";
import { addIndomie, buyIndomie, restockIndomie } from "./indomieSlice";

function IndomieView() {
  const numOfIndomie = useSelector((state) => state.indomieSlice.numOfindomie);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Indomie stock: {numOfIndomie}</h1>
      <button onClick={() => dispatch(addIndomie())}>Buy Indomie</button>
      <button onClick={() => dispatch(buyIndomie())}>Buy Indomie</button>
      <button onClick={() => dispatch(restockIndomie(5))}>
        Restock Indomie
      </button>
    </div>
  );
}

export default IndomieView;
