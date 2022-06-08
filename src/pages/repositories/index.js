import React, { useEffect } from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getRepositorie } from "services";
import { Loader } from "components/Loader";
import useDebounce from "utils";

const ReposotiriesPage = () => {

  const {
    watch,
    register,
    handleSubmit,
  } = useForm();
    
  const name = watch("search");

  const debouncedSearch = useDebounce(name, 1000);

  const { data, refetch, isLoading } = useQuery(
    ['repositories', debouncedSearch],
    getRepositorie,
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

  return(  
    <Layout path="repositories">
      <Text variant="big" type="h1">
        Busca un repositorio 
      </Text>
      <SearchBar action={handleSubmit((data) => refetch())} register={register}/>
      { isLoading && <Loader />}
      { (name && data?.length === 0) && `No hay resultados para la busqueda: ${name}` }
      {
        data?.length > 0 && data.map(item => <Card variant="repo" key={item.id} {...item} />)
      }
    </Layout>
  );
};

export default ReposotiriesPage;
