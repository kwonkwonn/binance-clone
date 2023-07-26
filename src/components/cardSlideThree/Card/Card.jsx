import styles from "./Card.module.css";

function Card({ link, photoLink, name, volume, floorPrice }) {
  return (
    <>
      <div className={styles.container}>
        <a className={styles.photos} href={link}>
          <div className={styles.cardDesign}>
            <img className={styles.photos} src={photoLink} alt="sad"></img>
            <div className={styles.bottomDesign}>
              <div className={styles.bottomTop}>
                <div className={styles.photosInContainer}>
                  <img
                    className={styles.photosIn}
                    src={photoLink}
                    alt="sad"
                  ></img>
                </div>
              </div>
              <div>{name}</div>
              <div className={styles.bottomBottom}>
                <div>volume: {volume}</div>
                <div> floor Price: {floorPrice}</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
