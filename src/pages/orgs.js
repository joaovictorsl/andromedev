import React from "react";
import OrganizationCard from "../components/organizationCard";
import Layout from "../components/layouts/layout";
import { orgs } from "../lib/organizations";

const OrgsPage = () => {
  return (
    <Layout title="Organizações" className="bg-gray-100">
      <section className="pt-20 pb-10 flex flex-col w-full items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="mb-8 text-center font-bold text-purple-800 sm:text-lg md:text-xl lg:text-5xl xl:text-5xl">Organizações homologadas</h1>
        </div>
        <div className="w-full px-10 flex flex-wrap justify-center">
          {orgs.map((org, index) => (
            <OrganizationCard info={org} key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
};
export default OrgsPage;
