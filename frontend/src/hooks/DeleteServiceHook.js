import { useMutation, useQueryClient } from "@tanstack/react-query";

import deleteService from "../services/CreatorService/deleteService";

const DeleteServiceHook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteService,

    onSuccess: () => {
      // refetch services list
      queryClient.invalidateQueries(["services"]);
    },
  });
};

export default DeleteServiceHook;