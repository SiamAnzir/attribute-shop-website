import logo from './logo.svg';
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  return (
    <>
        <section>
            <NavBar></NavBar>
            <Home></Home>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    </>
  );
}

export default App;
