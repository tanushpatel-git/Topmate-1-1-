// hooks/useGetAllServices.js

import { useQuery } from "@tanstack/react-query";
import GetMyServices from "../services/CreatorService/GetMyServices";

const useGetMyServices = () => {
  return useQuery({
    queryKey: ["my-services"],
    queryFn: GetMyServices,
  });
};

export default useGetMyServices;