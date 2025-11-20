import { AddressForm } from "./components/AddressForm/AddressForm";
import { EmployeeForm } from "./components/EmployeeForm/EmployeeForm";
import {getAllEmployees} from "./clients/employeesApiClient.ts";

export const App = async () => {
  const employees = await getAllEmployees();
  // employees => [ob1,obj]
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
        <div>
          {employees?.map((item, index) => (
              <div key={index}>
              <div>{item.name}</div>
              <div>{item.age}</div>
            </div>    
          ))}
        </div>
      </header>
    </div>
  );
};
