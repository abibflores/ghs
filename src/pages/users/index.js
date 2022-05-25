import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";

const UsersPage = () => {

  return(  
    <Layout path="users">
      <Text variant="big" type="h1">
        Busca un usuario 
      </Text>
      <SearchBar />
      <Card />
    </Layout>
  );
};

export default UsersPage;
