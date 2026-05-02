import { useQuery } from "@tanstack/react-query";
import Service_UserData from "../services/booking-services/Service_UserData";

const Service_userDataHook = (category) => {
  return useQuery({
    queryKey: ["marketplace", category],
    queryFn: () => Service_UserData(category),
    
    staleTime: 1000*60 *5, 

  });
};

export default Service_userDataHook;
