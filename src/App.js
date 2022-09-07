import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import ProductList from './component/ProductList';
import { useState } from 'react';
import CartList from './component/CartList';

function App() {

  const [product,setProduct]=useState([
    {
      url:"https://content.shop4reebok.com/static/Product-HF3794/reebok_HF3794_01.JPG.plp",
      name:"MEN'S REEBOK RUNNING TEMPO SHOES",
      category:"T-shirt",
      seller:"AMZ Seller Ghz",
      price:1999
    },
    {
      url:"https://content.shop4reebok.com/static/Product-HB5733/reebok_HB5733_1.jpg.plp",
      name:"MEN REEBOK CLASSICS TRACKSUIT HOODIE",
      category:"Shoes",
      seller:"AMZ Seller Ghz",
      price:1119
    },
    {
      url:"https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
      name:"WOMEN'S REEBOK SLEEVE TEE",
      category:"T-Shirt",
      seller:"AMZ Seller Ghz",
      price:1000
    },
    {
      url:"https://content.shop4reebok.com/static/Product-H02293/reebok_H02293_1.jpg.plp",
      name:"MEN'S REEBOK RUNNING TEMPO SHOES",
      category:"Shoes",
      seller:"AMZ Seller Ghz",
      price:1390
    },
    {
      url:"https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
      name:"MEN REEBOK CLASSICS TRACKSUIT HOODIE",
      category:"Shoes",
      seller:"AMZ Seller Ghz",
      price:1229
    },
    {
      url:"https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
      name:"MEN'S REEBOK TRAINING RUNNER SHORTS",
      category:"Shoes",
      seller:"AMZ Seller Ghz",
      price:1929
    },

  ])

  const [cart,setCart]=useState([]);
  const [showCart,setShowCart]=useState(false)
 // console.log(cart)
  const addToCart=(data)=>{
   // console.log(data)
   setCart([...cart,{...data,quantity:1}])

  }

  const handleShow=(value)=>{
    setShowCart(value)
  }
  return (<>
    <Header count={cart.length}  handleShow={handleShow}></Header>
    
    {
      showCart ? <CartList cart={cart}></CartList>:
      <ProductList product={product} addToCart={addToCart}></ProductList>
    }
    
    
    </>
  );
}

export default App;
