import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  return (
    <div>
      SingleProduct <br /> id={id}
    </div>
  );
};

export default SingleProduct;
