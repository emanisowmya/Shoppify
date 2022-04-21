import purse1 from "assets/images/Purse/purse1.jpeg";
import purse2 from "assets/images/Purse/purse2.jpg";
import purse3 from "assets/images/Purse/purse3.jpg";

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

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
        route: "/sections/page-sections/features",
        count: 500,
      },
      {
        image: `${purse3}`,
        name: "Male purse",
        route: "/sections/page-sections/features",
        count: 750,
      },
    ],
  },
  {
    title: "Furniture",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        name: "Navbars",
        count: 4,
        route: "/sections/navigation/navbars",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        name: "Nav Tabs",
        count: 2,
        route: "/sections/navigation/nav-tabs",
      },
      {
        image: `${imagesPrefix}/pagination.jpg`,
        name: "Pagination",
        count: 3,
        route: "/sections/navigation/pagination",
      },
    ],
  },
  {
    title: "Input Areas",
    description: "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        name: "Newsletters",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        name: "Contact Sections",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        name: "Forms",
        count: 3,
        route: "/sections/input-areas/forms",
      },
    ],
  },
  {
    title: "Attention Catchers",
    description: "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: `${imagesPrefix}/alerts.jpg`,
        name: "Alerts",
        count: 4,
        route: "/sections/attention-catchers/alerts",
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        name: "Notifications",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/modals.jpg`,
        name: "Modals",
        count: 5,
        route: "/sections/attention-catchers/modals",
      },
    ],
  },
  {
    title: "Elements",
    description: "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        name: "Buttons",
        count: 6,
        route: "/sections/elements/buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        name: "Avatars",
        count: 2,
        route: "/sections/elements/avatars",
      },
      {
        image: `${imagesPrefix}/dropdowns.jpg`,
        name: "Dropdowns",
        count: 2,
        route: "/sections/elements/dropdowns",
      },
    ],
  },
];
