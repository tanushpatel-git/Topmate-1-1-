import { useQuery } from "@tanstack/react-query";
import { OnetoOne } from "../services/booking-services/OnetoOne";

const OneToOneHook = (id) => {
  return useQuery({
    queryKey: ["service", id],
    queryFn: () => OnetoOne(id),
    enabled: !!id, 
  });
};

export default OneToOneHook;