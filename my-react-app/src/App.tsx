import { Link } from "react-router-dom";
import { PropsWithChildren } from "./@types/DynamicData";

function App({ children }: PropsWithChildren) {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/register"}>register</Link>
        <br />
        <Link to={"/products"}>Products</Link>
        <br />
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
      <br />
      <br />
      <div style={{ fontSize: "32px" }}>{children}</div>
    </>
  );
}

export default App;
