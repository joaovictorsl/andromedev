import React from "react";
import { Link } from "gatsby";
import { getCategoryLabel } from "../utils";

const OrganizationCard = ({ info: org }) => {
  return (
    <Link
      to={`/orgs/${org.uid}`}
      className="p-2 lg:w-1/3 w-full mx-0 md:mx-2 shadow-sm md:shadow-md my-1 md:my-3"
    >
      <div className="h-full flex items-center p-4">
        {org.image.url ? (
          <img
            alt={org.name.text}
            className="w-24 lg:w-32 xl:w-48 object-cover object-center flex-shrink-0 mr-4"
            src={org.image.url}
          />
        ) : (
          <div className="w-24 lg:w-32 xl:w-48 bg-gray-100 flex flex-shrink-0 mr-4 items-center justify-center text-4xl lg:text-6xl font-bold text-secondary-400">
            {org.name.text[0]}
          </div>
        )}
        <div className="flex-grow">
          <h2 className="text-gray-900 font-medium text-sm lg:text-base xl:text-xl">
            {org.name.text}
          </h2>
          <p className="text-gray-500 text-xs lg:text-sm xl:text-base">
            {getCategoryLabel(org.category)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OrganizationCard;
