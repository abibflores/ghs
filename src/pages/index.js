import React from "react";
import { Text } from "components/Text";
import { Layout } from "components/Layout";
import { Anchor } from "components/Anchor";

const Home = () => (
  <Layout path="">
    <Text variant="big" type="h1">
      Git Hub Search 
    </Text>
    <Text>Busca usuarios o repositorios de github</Text>
    <Anchor variant="button" next href="/users">Comienza ahora</Anchor>
  </Layout>
);

export default Home;
