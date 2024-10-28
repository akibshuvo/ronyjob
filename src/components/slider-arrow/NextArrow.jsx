import { FaAngleRight } from "react-icons/fa";

const NextArrow = ({onClick}) => {
    
    return (
        <div
          className='w-8 h-8 bg-white text-text_primary hover:text-black shadow-md absolute flex justify-center items-center cursor-pointer top-2/4 right-4 translate-y-[-50%] z-10'
          onClick={onClick}
        ><FaAngleRight/></div>
      );
}
export default NextArrow