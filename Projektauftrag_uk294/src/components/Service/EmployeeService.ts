import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { Employee } from "../Types/Employee";

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({

  getAllEmployees: async () => {
    const data = await api.get("employee");
    return data["data"]; 
  },
  
  getEmployeeById: async (id: number) => {
    const data = await api.get(`employee/${id}`);
    return data["data"];
  },

  createEmployee: async (employee: Employee) => {
    const data = await api.post("employee", employee);
    return data["data"];
  },

  updateEmployee: async (employee: Employee) => {
    const data = await api.put(`employee/${employee.id}`, employee);
    return data["data"];
  },

  deleteEmployee: async (id: number) => {
    const data = await api.delete(`employee/${id}`);
    return data["data"];
  },
});

export default EmployeeService;