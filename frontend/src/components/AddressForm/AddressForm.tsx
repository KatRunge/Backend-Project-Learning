import "./AddressForm.css";

export const AddressForm = () => (
  <div className="addressRoot">
    <h2>New Address</h2>
    <form className="form-container-address">
      <div className="form-group-address">
        <label htmlFor="street">Street</label>
        <input type="text" name="street" id="street" autoComplete="on" />
      </div>
      <div className="form-group-address">
        <label htmlFor="house-number">House Number</label>
        <input
          type="text"
          name="house-number"
          id="house-number"
          autoComplete="on"
        />
      </div>
      <div className="form-group-address">
        <label htmlFor="postal_code">Postal Code</label>
        <input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="on"
        />
      </div>
      <div className="form-group-address">
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" autoComplete="on" />
      </div>
      <div className="form-group-address">
        <label htmlFor="country">Country</label>
        <input type="text" name="country" id="country" autoComplete="on" />
      </div>
        <input type="submit" value="Submit" className="submit-button-address" />
    </form>
  </div>
);
