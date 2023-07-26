import "./Footer.css";

function Footer() {
  return (
    <div className="container">
      <div className="containerInside">
        <div className="first">
          <div style={{ fontSize: "1.5em" }}>Binance NFT</div>
          <div>Please contact</div>
        </div>
        <div className="second">
          <h3>About US</h3>
          <ul>
            <li>
              <a href="">About Binance</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">Binance Blog</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
          </ul>
        </div>
        <div className="third">
          <h3>Products</h3>
          <ul>
            <li>
              <a href="">exchange</a>
            </li>
            <li>
              <a href="">Binance Charity Foundation</a>
            </li>
            <li>
              <a href="">Academy</a>
            </li>
          </ul>
        </div>
        <div className="fourth">
          <h3>Service</h3>
          <ul>
            <li>
              <a href="">Buy Crypto</a>
            </li>
          </ul>
        </div>
        <div className="fifth">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>

            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Give us a feedback</a>
            </li>
            <li>
              <a href="">What is NFT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
