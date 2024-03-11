import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="max-w-[1200px] h-screen mx-auto mt-8">
  {
    cart.length > 0  ? 
    (<div className="flex">


      <div className=" flex flex-col ">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="w-[100%] p-10 flex flex-col justify-between">

        <div className="flex flex-col py-[10%] text-start">
          <div className="text-green-700 text-2xl font-semibold">Your Cart</div>
          <div className=" text-[48px] font-bold text-green-700 uppercase">Summary</div>
          <p className=" mt-2">
            <span className="text-2xl text-zinc-600 font-semibold ">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-2xl text-zinc-600 font-semibold">Total Amount: ${totalAmount}</p>
          <button className="mt-2 px-12 py-4 bg-green-700 rounded-md font-bold text-white text-xl">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex justify-center items-center flex-col h-screen gap-6">
      <h1 className="text-2xl font-bold">Your cart is empty !</h1>
      <Link to={"/"}>
        <button className="px-5 py-2 bg-green-600 rounded-md text-white font-bold uppercase">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
