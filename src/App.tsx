import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home";
import Product from "./components/Product";
import SubMenu from "./components/SubMenu";
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";


function App() {
 
  
  return (
    <>
    <main>
      <Router>
      <Header/>
     <SubMenu/>
     <section className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
     </section>
      </Router>
     <Footer/> 
    </main>
    </>
  )
}

export default App
