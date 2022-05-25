import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { SearchBar } from "components/SearchBar";
import { Card } from "components/Card";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getRepositorie } from "services";
import { Loader } from "components/Loader";

const ReposotiriesPage = () => {

  const {
    getValues,
    register,
    handleSubmit,
  } = useForm();
    
  const { search: name } = getValues();
    
  const { data, refetch, isLoading } = useQuery(
    ['repositories', name],
    getRepositorie,
    {
      enabled: !!name,
      refetchOnWindowFocus: false,
    }
  );

  return(  
    <Layout path="repositories">
      <Text variant="big" type="h1">
        Busca un repositorio 
      </Text>
      <SearchBar action={handleSubmit((data) => refetch())} register={register}/>
      {
        data?.length > 0 && data.map(item => <Card variant="repo" key={item.id} {...item} />)
      }
      { isLoading && <Loader />}
    </Layout>
  );
};

export default ReposotiriesPage;
