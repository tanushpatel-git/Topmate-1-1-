import { useQuery } from "@tanstack/react-query";
import Service_UserData from "../services/booking-services/Service_UserData";

const Service_userDataHook = (params = {}) => {
  
  return useQuery({
    queryKey: ["marketplace", params], 
    queryFn: () => Service_UserData(params), 
    staleTime: 1000 * 60 * 5, 
    retry:1,
  });
};

export default Service_userDataHook;
