import React, { useState } from "react";
import Header from "./Header";
const Catalog = (props) => {
  const [itemList, setItemList] = useState({
    processor: {
      AMD: [
        {
          name: "Ryzen 5 3600",
          decription: "6 core processor",
          price: 499,
        },
        {
          name: "Ryzen 7 3700",
          decription: "8 core processor",
          price: 699,
        },
      ],
      Intel: [
        {
          name: "I7",
          description: "intel i7 processor",
          price: 499,
        },
        {
          name: "I5",
          description: "intel i5 processor",
          price: 399,
        },
      ],
    },
    motherboard: {
      ASUS: [],
      Asrock: [],
    },
    GPU: {
      Nvidia: [],
      AMD: [],
    },
    Monitor: {
      Samsumg: [],
      LG: [],
      Dell: [],
    },
    Ram: {},
  });

  const categories = Object.keys(itemList);

  return (
    <main className="mainContent">
      <Header />
      <section className="catalog">
        <nav className="leftBarNav">
          <ul className="ulCategory">
            <li className="categoryListItem">{categories[0]}</li>
            <li className="categoryListItem">{categories[1]}</li>
            <li className="categoryListItem">{categories[2]}</li>
            <li className="categoryListItem">{categories[3]}</li>
            <li className="categoryListItem">{categories[4]}</li>
          </ul>
        </nav>
        <section className="itemGrid"></section>
      </section>
    </main>
  );
};

export default Catalog;
