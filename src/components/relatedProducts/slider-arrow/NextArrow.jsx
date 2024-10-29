import { FaAngleRight } from "react-icons/fa";

const Next = ({onClick}) => {
    
    return (
        <div
          className='w-8 h-8 bg-white ring-1 ring-gray-300 text-text_primary hover:text-black shadow-md absolute flex justify-center items-center cursor-pointer -top-5 right-3 z-10'
          onClick={onClick}
        ><FaAngleRight/></div>
      );
}
export default Next