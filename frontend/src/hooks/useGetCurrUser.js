import { useQuery } from "@tanstack/react-query"
import { getCurrUser } from "../services/userAuthServices/getCurrUser"



const useGetCurrUser = () => {
    return useQuery({
        queryKey: ["currUser"],
        queryFn: getCurrUser,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    })
}

export default useGetCurrUser