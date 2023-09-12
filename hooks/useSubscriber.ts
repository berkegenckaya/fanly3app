import useSWR from "swr"

import fetcher from "@/libs/fetcher";

const useSubscriber = (userId: string) => {
    const {
        data ,
        error , 
        isLoading , 
        mutate
    } = useSWR(`/api/users/subscriber/${userId}`, fetcher);

    return {
        data,error,isLoading,mutate
    }
}

export default useSubscriber;
