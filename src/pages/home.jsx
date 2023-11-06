import { useState, useEffect } from "react";
const url = "http://localhost:3000/products";
import "../index.css";


import Card from "react-bootstrap/Card";

import Carrosel from "../components/corrosel/carrosel";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <Carrosel></Carrosel>

      <img src="../assets/kris-gerhard-0BKZfcamvGg-unsplash.jpg" alt="" />
      
      <ul className="card_produto">
        {products.map((product) => (
          <li className="produto_lista" key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.nome}</Card.Title>
                <Card.Text>R$ {product.price}</Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
