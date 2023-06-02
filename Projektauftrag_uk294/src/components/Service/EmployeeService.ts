import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

export const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuYS52ZW5uZW1hbm5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzExNTE0LCJleHAiOjE2ODU3MTUxMTQsInN1YiI6IjQifQ.94tRERXR_HGly6NvWlN4wpPWRUtFkERvGQmhVPujgkg'};

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAllEmployees: async () => {
    const data = await api.get("employee", {headers : headers});
    return data["data"];
  },
});

export default EmployeeService;