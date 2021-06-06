import React from "react";
import  Layout  from "../component/Layout/Layout"
import WorldSearch from "../container/WorldSearch/WorldSearch"
// markup
const IndexPage = () => {
  return (
    <Layout customTitle="Countries">
      <WorldSearch/>
    </Layout>
  )
}

export default IndexPage
