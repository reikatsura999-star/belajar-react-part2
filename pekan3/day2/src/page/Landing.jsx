import { useAxios } from "../hooks/useAxios";
import { useStatusStock } from "../hooks/useStatusStock";
import { useCounter } from "../hooks/useCounter";
import { useToggle } from "../hooks/useToggle";

function Landing() {
  const data = useAxios("https://jsonplaceholder.typicode.com/posts/1");

  const stock = useStatusStock(2);

 

  return (
    <>
      <p>Stok: {stock ? "tersedia" : "tidak tersedia"}</p>
      
      <p>{data?.title}</p>
      <p>{data?.body}</p>
      
    </>
  );
}

export default Landing;
