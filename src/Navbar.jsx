import { IoFastFoodSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Link to={`/`}>
    <div className='flex my-5 items-center'>
      <IoFastFoodSharp className='text-3xl'/>
      <p className='text-3xl'>foodie</p>
    </div>
    </Link>
  )
}

export default Navbar