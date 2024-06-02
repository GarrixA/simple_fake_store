import { Link } from "react-router-dom";
import { PropsWithChildren } from "./@types/DynamicData";

function App({ children }: PropsWithChildren) {
  return (
    <>
      <div className="text-white flex space-x-9 bg-black m-auto justify-center align-middle text-center">
        <Link to="/" className="block hover:text-red-700">Home</Link>
        <Link to="/register" className="block hover:text-red-700">Register</Link>
        <Link to="/products" className="block hover:text-red-700">Products</Link>
        <Link to="/dashboard" className="block hover:text-red-700">Dashboard</Link>
      </div>
      <div className="mt-8 text-2xl">
        {children}
      </div>
    </>
  );
}

export default App;
