import logo from './logo.svg';
import './App.css';
import {useState} from "react";



function App() {

  const menuItems = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]

/*
    {menuItems.breakfast.map((element, index) => (
        name={element.food}
        key={index}
        foodPrice={element.price}
      />
    ))}
    */
   
  }
  
  const vegetarianIsOn = () => {
    const[isOn, switchOn] = useState(0);
  }
  */
  return (
    <div>
      <h1>Menu</h1>
      <h2>Breakfast</h2>
      <displayItems items={menuItems.breakfast} />
      <h2>Lunch</h2>
      <displayItems items={menuItems.lunch} />
      <h2>Dinner</h2>
      <displayItems items={menuItems.dinner} />
    </div>
  );


}



export default App;
