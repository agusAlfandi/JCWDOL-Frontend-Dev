import { useDispatch, useSelector } from "react-redux";
import { buy, restock } from "./indomieSlice";

function IndomieView() {
  const numOfIndomie = useSelector((state) => {
    return state.indomie.numOfIndomie;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Indomie: {numOfIndomie}</h1>
      <button onClick={() => dispatch(buy())}>Buy</button>
      <button onClick={() => dispatch(restock(10))}>Restock</button>
    </div>
  );
}

export default IndomieView;
