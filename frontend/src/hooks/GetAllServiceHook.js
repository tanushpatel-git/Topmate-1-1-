
import { useQuery } from "@tanstack/react-query";

import getAllServices from "../services/CreatorService/GetAllServices";


const GetAllServiceHook = () => {

  return useQuery({
    queryKey: ["all-services"],
    queryFn: getAllServices,
  });

};

export default GetAllServiceHook;


