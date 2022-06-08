import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";


import { getUser } from "services";
import { Loader } from "components/Loader";
import { useSearch } from "hooks";

const UsersPage = () => {
  const { data, isLoading, register, name } = useSearch(getUser, "users");


  return(  
    <Layout path="users">
      <Text variant="big" type="h1">
        Busca un usuario 
      </Text>
      <SearchBar register={register}/>
      {isLoading && <Loader />}
      { (name && data?.length === 0) && `No hay resultados para la busqueda: ${name}` }
      {
        (data?.length > 0) && data.map(item => <Card key={item.id} {...item} />)
      }
    </Layout>
  );
};

export default UsersPage;
