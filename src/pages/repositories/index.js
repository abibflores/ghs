import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";

const ReposotiriesPage = () => {

  return(  
    <Layout path="repositories">
      <Text variant="big" type="h1">
        Busca un repositorio 
      </Text>
      <SearchBar />
      <Card variant="repo" />
    </Layout>
  );
};

export default ReposotiriesPage;
