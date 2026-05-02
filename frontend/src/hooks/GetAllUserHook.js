import { useQuery } from "@tanstack/react-query";

import getAllUsers from "../services/userAuthServices/getAllUsers";


const GetAllUserHook = () => {

  return useQuery({
  queryKey: ["all-users"],
  queryFn: getAllUsers,
  });

};

export default GetAllUserHook;
