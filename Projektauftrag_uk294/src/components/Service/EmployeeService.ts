import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";
import { Employee } from "../Types/Employee";

export const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuYS52ZW5uZW1hbm5AZ21haWwuY29tIiwiaWF0IjoxNjg2MTE2OTAwLCJleHAiOjE2ODYxMjA1MDAsInN1YiI6IjQifQ.-XhSXJlUQKZLpclRtXHTmR73WZUHfPBtd3CxdOn51X8'};
const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAllEmployees: async () => {
    const data = await api.get("employee", {headers : headers});
    return data["data"];
  },
  
  getEmployeeById: async (id: number) => {
    const data = await api.get(`employee/${id}`, {headers : headers});
    return data["data"];
  },

  createEmployee: async (employee: Employee) => {
    const data = await api.post("employee", employee, {headers : headers});
    return data["data"];
  },

  updateEmployee: async (employee: Employee) => {
    const data = await api.put(`employee/${employee.id}`, employee, {headers : headers});
    return data["data"];
  },

  deleteEmployee: async (id: number) => {
    const data = await api.delete(`employee/${id}`, {headers : headers});
    return data["data"];
  },
});

export default EmployeeService;