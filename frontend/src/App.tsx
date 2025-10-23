import { AddressForm } from "./components/AddressForm/AddressForm";
import { EmployeeForm } from "./components/EmployeeForm/EmployeeForm";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Select a form</h1>

        <div className="counter-section">
          <EmployeeForm />
          <AddressForm />
          <div className="button-group">
            <button className="button">Create Employee</button>
            <button className="button">Create Address</button>
          </div>
        </div>
      </header>
    </div>
  );
};
