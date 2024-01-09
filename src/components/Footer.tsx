import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="p-4 bg-black grid grid-cols-1 md:grid-cols-3 text-gray-400 text-sm">
    <div className="font-bold text-3xl cursor-pointer">
      <p>
      <span className="text-lime-400">LHC</span>Mall
      </p>
      <span>Copyright © 2024</span>
    </div>
    <div className="col-span-2">
      
      <ul className="flex justify-normal items-center space-x-4 text-xs border-b pb-2">
        <li className='md:border-r md:pr-2'>Home </li>
        <li className='md:border-r md:pr-2'>Privacy & Policy </li>
        <li className='md:border-r md:pr-2'>Refund Policy </li>
        <li className='md:border-r md:pr-2'>Terms & Conditions </li>
        <li className="justify-self-end bg-lime-400 p-2 text-black">Contact Us</li>
      </ul>
        <ul className="flex justify-center md:justify-end space-x-2 text-lg pt-2">
          <li>
            <FaFacebook/>
          </li>
          <li>
            <FaXTwitter/>
          </li>
          <li>
            <FaInstagram/>
          </li>
          <li>
            <FaLinkedin/>
          </li>
        </ul>
      </div>  
    </footer>     
  )
}

export default Footer