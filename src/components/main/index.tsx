import mainImg from '../../assets/main';
import Status from './Status';
import './styles.css';

mainImg;
function Main() {
  return (
    <>
      <section className="text">
        <h2>Wait ! your order in progress.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </section>
      <section>
        <Status />
      </section>
      <section className="product">
        <div>
          <div>

          <img
            src={mainImg.product2}
            alt="clarifion image"
          />
          </div>
          <section className="comments">
            <div>
              <div className="user">
                <div>
                  <img
                    src={mainImg.photo}
                    alt=""
                  />
                </div>
                <div>
                  <div>
                    <img
                      src={mainImg.stars}
                      alt=""
                    />
                    <div className="info-user">
                      <strong>Kent T.</strong>
                      <img
                        src={mainImg.verify}
                        alt=""
                      />
                      <p>Verified Customer</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p>
                  “As soon as the Clarifions arrived I put one in my bedroom.
                  This was late in the afternoon. When I went to the bedroom in
                  the evening it smelled clean. When I went to bed I felt I
                  could breathe better. Wonderful.”
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h2>
            <span className="blue">ONE TIME ONLY</span> special price for 6
            extra Clarifion for only <span className="blue">$14 each</span>{' '}
            ($84.00 total!)
          </h2>
          <div className="product-details">
            <div className="product-image">
              <img
                src={mainImg.product}
                alt=""
              />
            </div>
            <div>
              <div className="product-more-details">
                <p>Clarifion Air Ionizer</p>
                <div>
                  <p className="weak">$180</p>
                  <p className="emphases">$84</p>
                </div>
              </div>
              <div>
                <img
                  src={mainImg.stars}
                  alt=""
                />
              </div>
              <div className="input-radio">
                <input
                  type="radio"
                  name="selected"
                />
                <label htmlFor="">12 left in Stock</label>
              </div>
            </div>
          </div>
          <p>
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
          <div className="list">
            <div>
              <img
                src={mainImg.checklist}
                alt=""
              />
              <p>
                Negative Ion Technology may <strong>help with allergens</strong>
              </p>
            </div>
            <div>
              <img
                src={mainImg.checklist}
                alt=""
              />
              <p>
                Designed for <strong>air rejuvenation</strong>
              </p>
            </div>
            <div>
              <img
                src={mainImg.checklist}
                alt=""
              />
              <p>
                <strong>Perfect for every room</strong> in all types of places.
              </p>
            </div>
          </div>
          <div>
            <div className="discount">
              <img
                src={mainImg.percent}
                alt=""
              />
              <p>
                Save <span className="blue">53%</span> and get{' '}
                <span className="blue">6 extra Clarifision</span> for only{' '}
                <span className="blue">$14</span> Each.
              </p>
            </div>
          </div>
          <button type="button">
            Yes - Claim my discount{' '}
            <img
              src={mainImg.arrow}
              alt=""
            />
          </button>
          <div className="payment-info">
            <div className="under-border">
              <div>
                <p>Free shipping</p>
              </div>
              <div className="side-border">
                <img
                  src={mainImg.lock}
                  alt=""
                />
                <p>Secure 256-bit SSL encryption</p>
              </div>
            </div>
            <div>
              <img
                src={mainImg.cards}
                alt=""
              />
            </div>
          </div>
          <div className="link">
            <p>No thanks, I don’t want this.</p>
          </div>
          <div className="seal">
            <div>
              <img
                src={mainImg.seal}
                alt=""
              />
            </div>
            <p>
              If you are not completely thrilled with your Clarifion - We have a{' '}
              <strong>30 day satisfaction guarantee</strong>. Please refer to
              our return policy at the bottom of the page for more details.
              Happy Shopping!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
