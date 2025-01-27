import Slider from '../components/Slider';
import {Link} from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'
function Explore (){
  return (
    <div className='export'>
      <header>
        <p className='pageHeader'>Explore</p>
      </header>

      <main>
        <Slider/>
        <p className='exploreCategoryHeading'>Categories</p>
        <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img src={rentCategoryImage} alt='rent' className='exploreCategoryImg'/>
          </Link>
          <p className='exploreCategoryName'>Places for rent</p>
          <Link to='/category/sale'>
            <img src={sellCategoryImage} alt='sell' className='exploreCategoryImg'/>
          </Link>
          <p className='exploreCategoryName'>Places for sale</p>
        </div>
      </main>
    </div>
  );
}

export default Explore
