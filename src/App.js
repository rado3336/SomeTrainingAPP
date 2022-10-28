import { useState } from 'react';
import './App.css';
import Product from './product';

function App() {

    const [cart, serCart] = useState(a: [])

  const handler = (product) =>{
    const newCart = [...cart];
    cart.push(product);
    console.log(newCart)
    serCart(newCart)
  };


  

  const data = [
    {
      id: 1,
      name: 'Tesla',
      price: 5
    },
    {
      id: 2,
      name: 'Apple',
      price: 9
    }
  ]

  return (
    <div className="App">
      {cart.length}
      {data.map(item =><Product key={item.id} product={item} onClickHandler={handler}/>)}
      
    </div>
  );
}

export default App;
