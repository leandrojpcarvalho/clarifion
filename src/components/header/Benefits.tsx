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
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setBenefits(FAKE_FETCH);
    setShowed(sliceArray(FAKE_FETCH, position))
  }, []);

  useEffect(() => {
    if(benefits.length !== 0) {
      setShowed(sliceArray(benefits, position));
    }
  }, [position])

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
    <div className="benefits">
      <div onClick={() => handleClick('preview')} aria-hidden={true}><img src={imgControl.preview} alt="preview" /></div>
        {
          showed.map(({offer, image}) => {
            return (
              <div key={offer} className="benefit">
                <div><img src={image} alt="" /></div>
                <div>{offer}</div>
              </div>
              );
          })
        }
      <div onClick={() => handleClick('next')} aria-hidden={true}><img src={imgControl.next} alt="preview" /></div>
    </div>
  );  
}

export default Benefits;