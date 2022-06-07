import React, { useEffect } from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";


import { getUser } from "services";
import { Loader } from "components/Loader";

const UsersPage = () => {
  const {
    watch,
    register,
    handleSubmit,
  } = useForm();

  const name = watch("search");

  const { data, refetch, isLoading, error } = useQuery(
    ['users', name],
    getUser,
    {
      enabled: !!name,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if(name) {
      refetch();
    }
  }, [name]);

  return(  
    <Layout path="users">
      <Text variant="big" type="h1">
        Busca un usuario 
      </Text>
      <SearchBar action={handleSubmit((data) => refetch())} register={register}/>
      {isLoading && <Loader />}
      {
        (data?.length > 0) && data.map(item => <Card key={item.id} {...item} />)
      }
    </Layout>
  );
};

export default UsersPage;
