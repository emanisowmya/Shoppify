// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import SignIn from "layouts/pages/authentication/sign-in";

const routes = [
  {
    name: "user activities",
    route: "/user-activities",
    component: <AboutUs />,
  },
  {
    name: "Track Your Order",
    route: "/track-order",
    component: <ContactUs />,
  },
  {
    name: "sign in",
    route: "/sign-in",
    component: <SignIn />,
  },
];

export default routes;
