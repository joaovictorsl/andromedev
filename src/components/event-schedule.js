import React from "react";
import { Link } from 'gatsby'

const eventSchedule = ({ events }) => {
  const getFilteredEvents = () => {
    const today = new Date();

    return events.filter((event) => {

    })
  }

  return (
    <section className="schedule text-gray-700 body-font bg-gray-200">
      <article className="container px-5 pb-12 mx-auto flex flex-wrap">
        {events.map((event, index) => (
          <div key={event.title + index} className="flex relative py-8 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-dark-gray pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-dark-gray text-white relative z-10 title-font font-medium text-sm">{index + 1}</div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 text-xl">{event.title}</h2>
                <h3 className="mb-1 text-sm">
                  {event.date ? event.date.toLocaleDateString() : "A definir"}
                </h3>
                <p className="leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </article>
      <article className="container px-5 pb-12 mx-auto flex flex-wrap text-center items-center justify-center">
        <Link className="text-xl text-orange hover:underline" to="/detalhes">Visualizar o cronograma completo</Link>
      </article>
    </section>
  )
}

export default eventSchedule;