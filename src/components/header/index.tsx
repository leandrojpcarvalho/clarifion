import headerImg from "../../assets/header";
import Benefits from "./Benefits";
import './styles.css'

function Header () {
  return (
    <>
      <Benefits />
      <div className="header-logo">
        <div className="logo">
          <img src={headerImg.logo} alt="Clarifion logo" />
        </div>
        <div className="security">
          <img src={headerImg.mcAfee} alt="mcAfee logo" />
          <img src={headerImg.norton} alt="norton logo" />
        </div>
      </div>
    </>
  );
}

export default Header;