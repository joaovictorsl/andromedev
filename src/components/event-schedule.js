import React from "react";
import { Link } from 'gatsby';

const eventSchedule = ({ events }) => {
  const getFilteredEvents = () => {
    const today = new Date();
    const nextEventIndex = events.findIndex(event => event.date ? event.date.getTime() > today.getTime() : event)

    return events.slice(Math.max(0, nextEventIndex), Math.min(events.length, nextEventIndex + 4))
  }

  const filteredEvents = getFilteredEvents()

  return (
    <section className="schedule text-gray-700 body-font bg-gray-200">
      <article className="container px-5 pb-10 mx-auto flex flex-wrap">
        {filteredEvents.map((event, index) => (
          <div className="w-full flex flex-col items-center">
            <div key={event.title + index} className="flex relative py-8 sm:items-center md:w-2/3 mx-auto">
              <div className="h-full w-6 absolute inset-0 flex flex-col items-center justify-center">
                <div className="h-full w-1 pointer-events-none bg-dark-gray" />
                {(index === filteredEvents.length - 1 && event !== events[events.length - 1]) && (
                  <div className="font-bold text-2xl">...</div>
                )}
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center text-white relative z-10 title-font font-medium text-sm bg-dark-gray" />
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

          </div>
        )
        )}
      </article>
      <article className="container px-5 pb-12 mx-auto flex flex-wrap text-center items-center justify-center">
        <Link className="text-xl text-orange hover:underline" to="/detalhes#cronograma">Visualizar o cronograma completo</Link>
      </article>
    </section>
  )
}

export default eventSchedule;