import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './Counter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el,
    document.getElementById('tutorial')
  );
}
setInterval(show, 1000);

function Item(props){
  return <div className="item">
    <b>Name:</b>{props.name}<br/>
    <b>Price:</b>{props.price}
  </div>;
}

function List(){
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice cream" price="24" />
  </div>
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('counter')
);

const shoppingList = <List/>;
ReactDOM.render(
  shoppingList,
  document.getElementById('shoppingList')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
