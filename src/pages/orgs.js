import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import OrganizationCard from "../components/organizationCard";
import Layout from "../components/layouts/layout";

const OrgsPage = () => {
  const { allPrismicOrganization: orgs } = useStaticQuery(graphql`
    query allPrismicOrganizations {
      allPrismicOrganization(sort: { fields: data___name___text }) {
        edges {
          node {
            uid
            data {
              image {
                url
              }
              name {
                text
              }
              category
            }
          }
        }
      }
    }
  `);

  const orderedOrgs = orgs.edges.sort((a, b) => {
    const nameA = a.node.data.name.text.toUpperCase();
    const nameB = b.node.data.name.text.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (
    <Layout title="Organizações" className="bg-gray-100">
      <section className="pt-20 pb-10 flex flex-col w-full items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="mb-8 text-center font-bold text-purple-800 sm:text-lg md:text-xl lg:text-5xl xl:text-5xl">
            Organizações homologadas
          </h1>
        </div>
        <div className="w-full px-10 flex flex-wrap justify-center">
          {orderedOrgs.map(({ node: { data, uid } }, index) => (
            <OrganizationCard info={{ ...data, uid }} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default OrgsPage;
