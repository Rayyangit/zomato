import React from "react";
import { Link } from "react-router-dom";
import css from "./RestaurantRegistration.module.css"; // Ensure this is the correct path

const RestaurantRegistration = () => {
  return (
    <div className={css.registrationContainer}>
      <h1>Select the service you want to register for</h1>

      <div className={css.serviceOption}>
        <h2>Both Food Delivery & Dining</h2>
        <p>List your restaurant on both the delivery and dining sections</p>
        <Link to="/fooddelievetydining" className={css.btn}>
          Register Now
        </Link>
      </div>

      <div className={css.serviceOption}>
        <h2>Food Delivery Only</h2>
        <p>List your restaurant in the delivery section only</p>
        <Link to="/fooddelievetydining" className={css.btn}>
          Register Now
        </Link>
      </div>

      <div className={css.serviceOption}>
        <h2>Dining Only</h2>
        <p>List your restaurant in the dining section only</p>
        <Link to="/dining" className={css.btn}>
          Register Now
        </Link>
      </div>

      <div className={css.addRestaurant}>
        <Link to="/add-restaurant" className={css.btn}>
          Register your restaurant
        </Link>
      </div>
    </div>
  );
};

export default RestaurantRegistration;
