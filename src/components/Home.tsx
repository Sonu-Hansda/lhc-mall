import { useState, useEffect } from "react";
import { HiOutlineHeart } from "react-icons/hi2";
import {RxReload} from "react-icons/rx";
import { Link } from "react-router-dom";
import Product from "../interface/Product";
import errorpage from "../images/500.png";

function Home() {
    const [products,setProducts] = useState<Product[]>([]);
    const [error ,setError] = useState<Boolean>(false);
    useEffect(()=>{
      try{

        fetch("https://fakestoreapi.com/products")
        .then((res)=>{
          return res.json();
        })
        .then((data:Product[])=>{
          setProducts(data);
          
          setError(data.length > 0 ? false : true);
          
        });
      }catch{
        setError(true);
      }
    },[]);
    if (error){
        <img src={errorpage} alt="500 :  internal server erorr" />
    } else{

      return (
        <section className="mx-12 py-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.length > 0 ?
         <>
         
         {products.map((product) => {
             return (
                 <div className="flex flex-col justify-between p-12 bg-white transition-all duration-300 ease-linear hover:shadow-xl border">
                 <span className="text-xl flex justify-end hover:text-2xl transition-all duration-300 ease-linear cursor-pointer">
                 <HiOutlineHeart/>
                 </span>
                   <Link to={`/product/${product.id}`} >
                 <img className="h-48 w-48 object-contain" src={product.image} alt={product.title} />
             </Link>
                 <h2>{product.title}</h2>
                 <p>$ {product.price}</p>
                <button className="w-full rounded-md hover:shadow-xl hover:translate-y-2 transition-all duration-300 delay-150 bg-black py-2 text-white">Buy now</button>
               </div>
             );
            })}
         </> : 
         <div className="flex justify-center">
            <RxReload/>
         </div> }
      </section>
  )
}
}

export default Home