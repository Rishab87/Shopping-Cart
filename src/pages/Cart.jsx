import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
//why using navlink is a more good practice than using link

const Cart = () => { //cart ke andar items slice ke andar initialState main jo empty array hai uske dvara track kr rhe hai

  const {cart} = useSelector((state)=> state);
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc , curr) => acc+ curr.price,0));
  },[cart])

  return(
    <div>
      {
        cart.length >0?
        (<div className="flex space-x-10 max-w-6xl mx-auto mt-5">
          <div>
            {
              cart.map((item, index)=>{
                return <CartItem key={item.id} item={item} itemIndex = {index}/>
              })
            }
          </div>

          <div className="flex flex-col justify-between mt-10">
            <div>
              <div className="text-green-400 font-bold text-2xl uppercase">Your Cart</div>
              <div className="text-green-400 font-bold text-5xl uppercase">Summary</div>
              <p className="mt-2">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="space-y-2">
              <p>Total Amount: <span className="font-bold">${totalAmount}</span></p>
              <button className="w-full bg-green-500 text-white rounded-md h-10 hover:bg-green-600 transition-all duration-200 ease-in">
                Checkout Now
              </button>
            </div>
          </div>
          
        </div>):(<div className="flex w-full h-[90vh] flex-col justify-center items-center gap-2">
          <h1 className="font-bold text-2xl">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-transparent border-2 border-gray-700 px-5 p-2 rounded-xl hover:text-white hover:bg-gray-700 transition-all duration-300 ease-in">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};

export default Cart;
