import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";
import { getRepositorie } from "services";
import { Loader } from "components/Loader";
import { useSearch } from "hooks";

const ReposotiriesPage = () => {
  const { data, isLoading, register, name } = useSearch(getRepositorie, "repositories");
  return(  
    <Layout path="repositories">
      <Text variant="big" type="h1">
        Busca un repositorio 
      </Text>
      <SearchBar register={register}/>
      { isLoading && <Loader />}
      { (name && data?.length === 0) && `No hay resultados para la busqueda: ${name}` }
      {
        data?.length > 0 && data.map(item => <Card variant="repo" key={item.id} {...item} />)
      }
    </Layout>
  );
};

export default ReposotiriesPage;
