import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state)=> state);

  return(
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14"/> {/*public folder main log hai toh ../public kyun nhi likhna pda*/}
          </div>
        </NavLink>
      
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
        
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl"/>
              {
                cart.length>0 &&
                <div className="absolute rounded-full -top-1 -right-2 w-5 h-5 flex justify-center items-center text-white bg-green-600 text-xs animate-bounce">{cart.length}</div>
              }
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
