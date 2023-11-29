import { useEffect, useState } from "react";
import { imgBenefits, imgControl } from "../../assets/benefits";
import { sliceArray } from "../../utils/utils";
import { Benefit } from '../../types/benefits';

const FAKE_FETCH = [
  {
    offer: '30-DAY SATISFACTION GUARANTEE',
    image: imgBenefits.satisfaction,
  },
  {
    offer: 'Free delivery on orders over $40.00',
    image: imgBenefits.delivery,
  },
  {
    offer: '50.000+ HAPPY CUSTOMERS',
    image: imgBenefits.heart
  },
  {
    offer: '100% Money Back Guarantee',
    image: imgBenefits.moneyBack
  },
]

const moves = {
  next: 1,
  preview: -1
};

function Benefits() {
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [showed, setShowed] = useState<Benefit[]>([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setBenefits(FAKE_FETCH);
  }, []);

  useEffect(()=>{
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    })
  }, []);

  useEffect(() => {
    if(width>=1500) {
      setShowed(benefits)
    } else {
      setShowed(sliceArray(benefits, position))
    }
  },[width, benefits, position])

  const handleClick = (direction: keyof typeof moves) => {
    const lastPosition = benefits.length - 1;
    if (position === lastPosition && direction ==='next') {
      setPosition(0);
    } else if(position === 0 && direction === 'preview') {
      setPosition(lastPosition);
    } else {
      setPosition(position + moves[direction]);
    }
  };

  return (
    <div className="container">
      <div className="benefits">
        <div onClick={() => handleClick('preview')} aria-hidden={true} className={width >= 1500 ? 'hidden': 'pointer'}><img src={imgControl.preview} alt="preview" /></div>
          {
            showed.map(({offer, image}) => {
              return (
                <div key={offer} className="benefit">
                  <div><img src={image} alt="" /></div>
                  <p>{offer}</p>
                </div>
                );
            })
          }
        <div onClick={() => handleClick('next')} aria-hidden={true} className={width >= 1500 ? 'hidden': 'pointer'}><img src={imgControl.next} alt="preview" /></div>
      </div>
    </div>
  );  
}

export default Benefits;