import React, { useEffect } from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";


import { getUser } from "services";
import { Loader } from "components/Loader";
import useDebounce from "utils";

const UsersPage = () => {
  const {
    watch,
    register,
    handleSubmit,
  } = useForm();

  const name = watch("search");

  const debouncedSearch = useDebounce(name, 1000);

  const { data, refetch, isLoading } = useQuery(
    ['users', debouncedSearch],
    getUser,
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
    <Layout path="users">
      <Text variant="big" type="h1">
        Busca un usuario 
      </Text>
      <SearchBar action={handleSubmit((data) => refetch())} register={register}/>
      {isLoading && <Loader />}
      { (name && data?.length === 0) && `No hay resultados para la busqueda: ${name}` }
      {
        (data?.length > 0) && data.map(item => <Card key={item.id} {...item} />)
      }
    </Layout>
  );
};

export default UsersPage;
