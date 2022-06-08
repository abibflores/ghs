import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import useDebounce from "utils";

export const useSearch = (callback, key) => {
  const {
    watch,
    register,
  } = useForm();
        
  const name = watch("search");
    
  const debouncedSearch = useDebounce(name, 1000);
    
  const { data, refetch, isLoading } = useQuery(
    [`${key}`, debouncedSearch],
    callback,
    {
      enabled: !!debouncedSearch,
      refetchOnWindowFocus: false,
    }
  );
    
  useEffect(() => {
    if(debouncedSearch) {
      refetch();
    }
  }, [debouncedSearch]);

  return { register, data, isLoading, name };
};