
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="">

      <div className=" flex py-[8%]">

        <div className="w-[210px]">
          <img className=" h-[180px] w-full object-contain" src={item.image} />
        </div>
        <div className="w-[60%] flex flex-col gap-4">
          <h1 className="text-zinc-500 text-2xl font-semibold">{item.title}</h1>
          <h1 className=" text-zinc-700">{item.description}</h1>
          <div className="flex justify-between">
            <p className="text-xl text-green-800 font-bold">$ {item.price}</p>
            <div className=" flex justify-center items-center w-[30px] h-[30px] rounded-full bg-red-600"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
