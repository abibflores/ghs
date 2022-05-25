import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";


import { getUser } from "services";

const UsersPage = () => {
  const {
    getValues,
    register,
    handleSubmit,
  } = useForm();

  const { search: name } = getValues();

  const { data, refetch } = useQuery(
    ['users', name],
    getUser,
    {
      enabled: !!name,
      refetchOnWindowFocus: false,
    }
  );

  return(  
    <Layout path="users">
      <Text variant="big" type="h1">
        Busca un usuario 
      </Text>
      <SearchBar action={handleSubmit((data) => refetch())} register={register}/>
      {
        data?.length > 0 && data.map(item => <Card key={item.id} {...item} />)
      }
    </Layout>
  );
};

export default UsersPage;
