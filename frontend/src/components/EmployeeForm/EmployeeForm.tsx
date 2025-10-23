import "./EmployeeForm.css";

export const EmployeeForm = () => (
  <div className="root">
    <h2>New employee</h2>
    <form className="formContainer">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" autoComplete="on" />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position</label>
        <input type="text" name="position" id="position" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="text" name="age" id="age" />
      </div>
      <div className="form-group">
        <label htmlFor="nationality">Nationality</label>
        <input type="text" name="nationality" id="nationality" />
      </div>
      <div className="form-gender-group">
        <p>Gender:</p>
        <label>
          <input type="radio" name="gender" value="male" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
        <label>
          <input type="radio" name="gender" value="neutral" />
          Neutral
        </label>
      </div>
      <input type="submit" value="Submit" className="submit-button" />
    </form>
  </div>
);
