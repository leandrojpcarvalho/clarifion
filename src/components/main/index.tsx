import Status from './Status'
import './styles.css'
import product from '../../assets/product.svg'

function Main() {
  return(
    <>
      <section className="text">
        <h2>Wait ! your order in progress.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </section>
      <section>
        <Status />
      </section>
      <section className='product'>
        <h2><span className='blue'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className='blue'>$14 each</span> ($84.00 total!)</h2>
        <div className='product-details'>
          <div className='product-image'><img src={product} alt="" /></div>
          <div>
            <div className='product-more-details'>
              <p>Clarifion Air Ionizer</p>
              <div>
                <p className='weak'>$180</p>
                <p className='emphases'>$84</p>
              </div>
            </div>
            <div>
              <p>stars</p>
            </div>
            <div className='input-radio'>
              <input type="radio" name="selected"/>
              <label htmlFor="">12 left in Stock</label>
            </div>
          </div>
        </div>
        <p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
      </section>
    </>
  )
}


export default Main;