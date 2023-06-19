import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () =>{
    const result = useSelector((state)=>state.cartData);
    console.warn("data in header", result);

    return (
        <div className="header">
            <Link to="/"><h1 className="logo">E-com</h1></Link>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*" alt=""></img>
                </div>
            </Link>
        </div>
    )
}

export default Header;