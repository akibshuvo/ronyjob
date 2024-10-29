import { FaAngleLeft } from "react-icons/fa";

const Prev = ({onClick}) => {
    
    return (
        <div
          className='w-8 h-8 bg-white ring-1 ring-gray-300 text-text_primary hover:text-black shadow-md absolute flex justify-center items-center cursor-pointer -top-5 right-12 z-10'
          onClick={onClick}
        ><FaAngleLeft/></div>
      );
}
export default Prev