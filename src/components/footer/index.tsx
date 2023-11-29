import mainImg from '../../assets/main';
import './styles.css';

function Footer() {
  return (
    <div>
      <div>
        <div>
          <p>Copyright (c) 2023</p>
        </div>
        <div>
          <p>Clarifionsupport@clarifion.com</p>
        </div>
      </div>
      <div>
          <img
            src={mainImg.lockWhite}
            alt=""
          />
          <p>Secure 256-bit SSL encryption</p>
      </div>
    </div>
  );
}

export default Footer;
