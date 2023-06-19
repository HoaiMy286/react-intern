import { addToCart, emptyCart } from '../redux/action';
import { removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routers } from 'react-router-dom';

function Main() {
    const dispatch = useDispatch();
    let data = useSelector((state)=>state.productData);
    console.warn("data in main component", data);

  const product = {
    name: 'i phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }

  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <div>
        {/* <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
        <div>
            <button onClick={() => dispatch(removeToCart(product.name))}>Remove from cart</button>
        </div> */}
        <div>
            <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
        </div>
        {/* <div>
            <button onClick={() => dispatch(productList())}>Call product list</button>
        </div> */}
        <div className='product-container'>
          {
            data.map((item) => 
              <div className='product-item'>
                <img src={item.photo} alt="" />
                <div> Name: {item.name}</div>
                <div> Color: {item.color}</div>
                <div> Price: {item.price}</div>
                <div>
                  <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                  <button onClick={() => dispatch(removeToCart(item.id))}>Remove from cart</button>
                </div>
              </div>)
          }
        </div>

    </div>
  );
}

export default Main;
