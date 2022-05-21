import purse1 from "assets/images/Purse/purse0.jpg";
import purse2 from "assets/images/Purse/purse1.jpg";
import purse3 from "assets/images/Purse/purse2.jpg";
import furniture0 from "assets/images/Purse/furniture0.jpg";
import furniture1 from "assets/images/Purse/furniture1.jpg";
import furniture2 from "assets/images/Purse/furniture2.jpg";
import shoes0 from "assets/images/Purse/shoes0.jpg";
import shoes1 from "assets/images/Purse/shoes1.jpg";
import shoes2 from "assets/images/Purse/shoes2.jpg";
import belt0 from "assets/images/Purse/belt0.jpg";
import belt1 from "assets/images/Purse/belt1.jpg";
import belt2 from "assets/images/Purse/belt2.jpg";
import dress0 from "assets/images/Purse/dress0.jpg";
import dress1 from "assets/images/Purse/dress1.jpg";
import dress2 from "assets/images/Purse/dress2.jpg";

export default [
  {
    title: "Purse",
    description: "A collection of over 300 purses all around the world",
    items: [
      {
        image: `${purse1}`,
        name: "Arista Vault",
        route: "/page-headers",
        count: 100,
      },
      {
        image: `${purse2}`,
        name: "Female purse",
        route: "/page-headers",
        count: 500,
      },
      {
        image: `${purse3}`,
        name: "Male purse",
        route: "/page-headers",
        count: 750,
      },
    ],
  },
  {
    title: "Furniture",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${furniture0}`,
        name: "Sofa",
        count: 14000,
        route: "/page-headers",
      },
      {
        image: `${furniture1}`,
        name: "Bed",
        count: 25000,
        route: "/page-headers",
      },
      {
        image: `${furniture2}`,
        name: "Shelf",
        count: 20000,
        route: "/page-headers",
      },
    ],
  },
  {
    title: "Shoes",
    description: "Best quality shoes with best price.",
    items: [
      {
        image: `${shoes0}`,
        name: "Nike Shoes",
        count: 5000,
      },
      {
        image: `${shoes1}`,
        name: "Men Casuals",
        count: 999,
      },
      {
        image: `${shoes2}`,
        name: "Sports Shoes",
        count: 2999,
        route: "/page-headers",
      },
    ],
  },
  {
    title: "Belt",
    description: "20+ best quality belts.",
    items: [
      {
        image: `${belt0}`,
        name: "Leather Belt",
        count: 999,
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${belt1}`,
        name: "Men belt",
        count: 3000,
      },
      {
        image: `${belt2}`,
        name: "Women belt",
        count: 1999,
        route: "/sections/attention-catchers/modals",
      },
    ],
  },
  {
    title: "Dress",
    description: "Best quality dresses.",
    items: [
      {
        image: `${dress0}`,
        name: "Jeans",
        count: 1499,
        route: "/sections/elements/buttons",
      },
      {
        image: `${dress1}`,
        name: "Jump Suit",
        count: 999,
        route: "/sections/elements/avatars",
      },
      {
        image: `${dress2}`,
        name: "Long Frock",
        count: 4999,
        route: "/sections/elements/dropdowns",
      },
    ],
  },
];
