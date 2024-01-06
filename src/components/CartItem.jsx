import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({item , itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from Cart")
  }

  return(
    <div className="flex space-x-10 border-b-2 border-gray-700 p-5">
      <div className="w-[280px]">
        <img src={item.image} className="h-full w-full"/>
      </div>

      <div className="flex flex-col justify-evenly">
        <h1 className="font-bold text-2xl">{item.title}</h1>
        <h1>{item.description.split(" ").slice(0,15).join(" ") +"..."}</h1>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-bold ">${item.price}</p>
            <div onClick={removeFromCart}>
              <MdDelete className="text-red-600 bg-red-200 rounded-full text-3xl p-1 cursor-pointer"/>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
