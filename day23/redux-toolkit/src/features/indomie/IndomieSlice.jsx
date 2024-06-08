import { useDispatch, useSelector } from "react-redux";
import { buyIndomie, restockIndomie } from "./indomieSlice";

function IndomieView() {
  const numOfIndomie = useSelector((state) => state.indomie.numOfIndomie);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Indomie stock: {numOfIndomie}</h1>
      <button onClick={() => dispatch(buyIndomie)}>Buy Indomie</button>
      <button onClick={() => dispatch(restockIndomie(5))}>
        Restock Indomie
      </button>
    </div>
  );
}

export default IndomieView;
