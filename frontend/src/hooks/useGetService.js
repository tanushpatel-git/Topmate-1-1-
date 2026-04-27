import { useQuery } from "@tanstack/react-query";
import getServiceById from "../services/CreatorService/getServiceById";


const useGetService = (id) => {

  return useQuery({
    queryKey: ["service", id],
    queryFn: () => getServiceById(id),
    enabled: !!id, // run only when id exists
  });
};

export default useGetService;