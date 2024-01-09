import { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi2"
import { useParams } from "react-router-dom"
import IProduct from "../interface/Product";

function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState<IProduct | undefined>(undefined);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            return res.json();
        })
        .then((data:IProduct)=> setProduct(data));
    },[]);        
        return (
            <div className="flex flex-col md:flex-row justify-center md:w-3/4 mx-auto pt-4 space-x-4">
          <img src={product?.image} alt={product?.title} className="px-24 py-2 md:p-0 md:h-96 md:w-96 object-contain" />
        <div className="md:px-8">
          <p className="text-2xl md:text-4xl font-bold">{product?.title}</p>
          <p className="text-3xl py-2 text-lime-600 font-bold">$ {product?.price}</p>
          <div className="w-full flex justify-center md:justify-stretch items-center space-x-4 py-2">
            <button className="w-1/3 md:w-1/2  rounded-sm bg-black text-white p-3">Buy</button>
            <button className="md:w-1/4 rounded-sm bg-gray-200 p-3">Add to cart</button>
            <span className="w-1/4 text-3xl">
            <HiOutlineHeart />
            </span>
          </div>
          <p className="border p-4 m-2 md:m-0">
            <span className="block underline">Description</span>
            {product?.description}
            </p>
        </div>
      </div>
  )
}

export default Product