import React from "react";

const ProjectCategory = ({ category }) => (
	<div className="inline-block bg-purple-200 uppercase rounded-full px-3 py-1 text-xs font-semibold text-purple-800 mr-2 md:mr-0">
		{category}
	</div>
)

const ProjectCard = ({ info }) => {
	if (!info.approved) {
		return null
	}

	const categories = info.category.text.split(",")

	return (
		<div className="shadow-lg w-full border border-solid border-gray-100 bg-gray-100 px-6 md:px-12 py-6 md:py-8">
			{console.log(info)}
			<div className="flex flex-col md:flex-row justify-between items-center mb-5">
				<div className="">
					<h3 className="uppercase text-xs mb-2">Nome do projeto</h3>
					<h2 className="uppercase text-xl md:text-2xl font-bold">{info.name.text}</h2>
				</div>
				<div className="mt-3 md:mt-0 font-bold uppercase text-sm md:text-base rounded-md text-center p-1 md:p-2 bg-gray-400 text-gray-800 w-full md:w-48">
					{info.registered} inscritos
				</div>
			</div>
			<div className="flex mb-10 flex-wrap space-y-4 md:space-y-0 md:space-x-4">
				{categories.map((category, index) => <ProjectCategory key={index} category={category} />)}
			</div>
			<div className="mb-10">
				<h3 className="uppercase text-xs mb-2">Descrição</h3>
				<h5 className="text-sm md:text-lg">{info.description.text}</h5>
			</div>
			<div className="inline-flex flex-col mb-10">
				<h3 className="uppercase text-xs mb-2">Mentores</h3>
				<a href={`mailto:${info.mentor_email.text}`} className="items-center text-purple-700 hover:text-blue-600 text-sm md:text-lg">{info.mentor.text}</a>
				<a href={`mailto:${info.auxiliary_mentor_email.text}`} className="items-center text-purple-700 hover:text-blue-600 text-sm md:text-lg">{info.auxiliary_mentor.text}</a>
			</div>
			<div className="flex w-full">
				<a
					className="text-white text-center w-full md:w-auto bg-orange px-4 py-3 font-bold uppercase text-lg transition duration-150 ease-in-out hover:bg-secondary-600"
					href={info.proposal.url}
					target="_blank"
					rel="noreferrer"
				>
					Ler proposta
				</a>
			</div>
		</div>
	)
};

const ProjectList = ({ projects }) => {
	if (!projects) {
		return null
	}

	return (
		<div className="flex flex-col space-y-6 w-full py-2 px-5 md:py-5 md:px-10 text-gray-700">
			{projects.map(({ node: { data: project } }, index) => <ProjectCard key={index} info={{ ...project }} />)}
		</div>
	);
};

export default ProjectList;
