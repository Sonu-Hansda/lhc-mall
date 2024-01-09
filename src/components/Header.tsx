import { HiOutlineMagnifyingGlass, HiHeart , HiShoppingBag } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import {CgMenuGridO} from "react-icons/cg"
function Header() {
  return (
    <header className="grid grid-cols-3 justify-items-center py-4 bg-lime-400">
       <div className='relative md:hidden justify-self-start text-3xl ml-8 cursor-pointer'>
          <CgMenuGridO/>
       </div>
       <Link to={"/"}>
        <div className="font-bold text-3xl cursor-pointer">
            <span className="text-white">LHC</span>Mall
        </div>
       </Link>
        <div className="hidden bg-lime-100 md:flex pl-2 justify-between items-center group w-3/4  border border-gray-400 rounded-full focus-within:border-black focus-within:w-full transition-all duration-300 ease-linear ">
          <input className="w-full text-center outline-none bg-transparent" placeholder="Search" type="text" name="search" id="search" />
          <span className="group-focus-within:cursor-pointer p-3 transition-colors duration-500 ease-in-out rounded-full text-gray-500 group-focus-within:text-white group-focus-within:bg-black text-lg">
          <HiOutlineMagnifyingGlass />
          </span>
        </div>
        <div className="flex space-x-2 items-center text-xl">
        <HiShoppingBag />
        <HiHeart/>
        <img src="https://avatars.githubusercontent.com/u/81312458?v=4" alt="User Image" className="h-8 rounded-full cursor-pointer" />
        </div>

      </header>
  )
}

export default Header