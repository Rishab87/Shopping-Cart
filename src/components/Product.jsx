import { useDispatch, useSelector } from "react-redux";
import { remove,add } from "../redux/Slices/cartSlice";
import {toast} from "react-hot-toast";

const Product = ({post}) => {

  const {cart} = useSelector((state)=> state);
  const dispatch = useDispatch();

  const addToCart = ()=> {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = ()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return(
    <div className="flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] gap-3 mt-10 p-4 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") +"..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={`${post.image}`} className="h-full w-full"/>
      </div>

      <div className="flex justify-between gap-12  items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
          {
            cart.some((p) => p.id === post.id) ? <button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in">Remove Item</button> : 
            <button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in">Add to Cart</button> //cart ke andar jo element padi hai uski id jo post pass kr rhe hai uske barabar hogi toh true
          }
      </div>
      
    </div>
  );
};

export default Product;
