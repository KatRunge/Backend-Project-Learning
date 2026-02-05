// Import API and types from their respective packages
import { EmployeesApi } from '../../../generated-client';
// import { Employee, Address } from './generated-client/models';
import { Configuration } from '../../../generated-client';

const config = new Configuration({
    basePath: 'http://localhost:8000'
});

const api = new EmployeesApi(config);

export const getAllEmployees = async () => {
   const result = await api.apiEmployeesGet()
    console.log(result, 'result status');
    if (result.status === 200) {
        return result.data
    }
};
