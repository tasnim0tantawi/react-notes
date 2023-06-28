import React from 'react'
import pizzaData from "./data";
import "./index.css";


function Header() {
  return <header className={"header"}>
      <h1>
      Tasnim's Pizza
      </h1>
      </header>;
}

function Footer() {
  let hour = new Date().getHours();
  let open = hour > 8 && hour < 20;
  let year = new Date().getFullYear();
    return <footer className={"footer"}>
        {open ? <Order openHour={8} closeHour={20} /> : <p>Sorry, we are closed.</p>}
      <p> All rights are reserved Tasnim's Pizza {year}</p>
    </footer>;
}

function Order({openHour, closeHour}) {
  return <div className={"order"}>
    <p>
        We are open from {openHour}:00 to {closeHour}:00, Monday through Friday.
    </p>

    <button className={"btn"}>Place an order</button>
  </div>;
}
function PizzaList() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;

  return <main className={"menu"}>
        <h2>Menu</h2>
      {numPizzas > 0 ? (
          <>
        <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
        </p>
          <p>
              We have {numPizzas} pizzas available today.
          </p>
              <ul className={"pizzas"}>
                    {pizzas.map((pizza) => (
                        <li key={pizza.name}>
                            <Pizza pizzaObj={pizza} />
                        </li>
                    ))}
                </ul>

          </>
        ) : (
        <p>Sorry, we are out of pizzas.</p>
        )}

  </main>

}
function Pizza({pizzaObj}) {
    return <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={require(".//"+pizzaObj.photoName)} alt={pizzaObj.name} />
        <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{ pizzaObj.soldOut? "Sold Out" : pizzaObj.price} €</span>

        </div>
    </li>
}

function App() {
  return (
    <div className={"container"}>
        <Header />
        <PizzaList />
        <Footer />

    </div>
  );
}

export default App;
