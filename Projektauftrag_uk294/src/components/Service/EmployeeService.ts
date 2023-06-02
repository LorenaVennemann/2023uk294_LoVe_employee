import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

export const headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxvcmVuYS52ZW5uZW1hbm5AZ21haWwuY29tIiwiaWF0IjoxNjg1NzAzNTY0LCJleHAiOjE2ODU3MDcxNjQsInN1YiI6IjQifQ.2yn7kaKCxgmMzgDyuXYLhYDuKwMM-EmScjEq-lqo2xQ'};

const EmployeeService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAllEmloyees: async () => {
    const data = await api.get("employee", {headers : headers});
    return data["data"];
  },
});

export default EmployeeService;