import { useEffect, useState } from 'react'

function SubMenu() {
    const [categories,setCategories] = useState<String[]>([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/categories")
        .then((res)=>{
            return res.json();
        })
        .then((data:String[])=>setCategories(data));
    },[]);
  return (
    <section className="bg-lime-300">
    <ul className="flex justify-center gap-x-8 border-b py-1 text-sm">
      {categories.map((category) => {
        return (
          <li className="cursor-pointer hover:underline">{category}</li>
        );
      })}
    </ul>
  </section>
  )
}

export default SubMenu