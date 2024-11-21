import React, { useState } from 'react';

const Fooddelieverydining = () => {
 const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phoneNumber: "",
    primaryContact: "",
    location: "",
    area: "",
    city: "",
    referred: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data:", formData);
    alert("Registration submitted!");
  };

  return (
    <div className="dining-container">
      <div className="dining-header">
        <h1>Complete Your Registration</h1>
        <p>
          Join Zomato and grow your restaurant by offering delivery and dining services.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="dining-form">
        {/* Restaurant Information */}
        <section className="form-section">
          <h2>Restaurant Information</h2>
          <div className="form-group">
            <label htmlFor="restaurantName">Restaurant Name</label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              placeholder="Enter your restaurant name"
              required
            />
          </div>
        </section>

        {/* Owner Details */}
        <section className="form-section">
          <h2>Owner Details</h2>
          <div className="form-group">
            <label htmlFor="ownerName">Full Name</label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </section>

        {/* Location Details */}
        <section className="form-section">
          <h2>Restaurant Location</h2>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Search for area or street name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area / Sector / Locality</label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="Enter the locality or area"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter the city"
              required
            />
          </div>
        </section>

        {/* Referral Section */}
        <section className="form-section">
          <h2>Referral</h2>
          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                id="referred"
                name="referred"
                checked={formData.referred}
                onChange={handleChange}
              />
              Did someone refer you to this platform?
            </label>
          </div>
        </section>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Registration
        </button>
      </form>
    </div>
  );
};


export default Fooddelieverydining