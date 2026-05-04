import { useQuery } from "@tanstack/react-query";
import Service_UserData from "../services/booking-services/Service_UserData";

const Service_userDataHook = () => {
  
  return useQuery({
    queryKey: ["marketplace"], 
    queryFn: Service_UserData, 
    staleTime: 1000 * 60 * 5, 
    retry:1,
  });
};

export default Service_userDataHook;
