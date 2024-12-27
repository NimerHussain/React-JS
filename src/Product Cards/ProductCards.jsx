import React from "react";
import styles from "./ProductCards.module.css";

const Card = ({ id, imgSrc, title, desc ,price, category,rate}) => {
  return (
    <>
    
    <div className={styles.divContainer}>
      <img className={styles.img} src={imgSrc} alt="" />
      <h2>ID: {id}</h2>
      <h3>{title}</h3>
      <h4>Price :{price}</h4>
      <h4>{category}</h4>
      <h5>{rate.rate}</h5>
      <p>{desc}</p>
    </div>
    </>
  );
};

// Card.propTypes = {
//   id: PropTypes.number,
//   imgSrc: PropTypes.string,
//   title: PropTypes.string,
//   desc: PropTypes.string,
// };

export default Card;