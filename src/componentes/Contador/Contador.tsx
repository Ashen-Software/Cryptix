
import "./contador.css";

function Contador({ value, decrementar, incrementar }) {

  return (
    <div className="contador">
      <button onClick={decrementar}>-</button>
      <p>{value}</p>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default Contador;