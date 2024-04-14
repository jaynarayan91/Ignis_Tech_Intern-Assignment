import React, { useEffect, useState } from "react";
import { EventsCard } from "../../components/EventsCard/EventsCard";
import './BrowseEvents.css';

export const BrowseEvent = ({ searchData }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => { 
    const getAllEvents = async () => {
      const data = await fetch("http://127.0.0.1:8000/api/events/");
      const response = await data.json();
      console.log(response);
      setEvents(response);
    }
    getAllEvents();
  }, []);
  return (
    <div className="App-header">
      {(searchData === null) ? (
        <></>
      ) : (
        <EventsCard
          key={searchData.id}
          eventImg={searchData.image}
          eventTitle={searchData.event_name}
          eventDate={searchData.event_date}
          eventTime={searchData.event_time}
          location={searchData.location}
          eventCost={searchData.price}
        />
      )}
      <h1 className="font-bold text-black">Likes</h1>
      {events.map((item) => {
        return (
          <EventsCard
            key={item.id}
            eventImg={item.image}
            eventTitle={item.event_name}
            eventDate={item.event_date}
            eventTime={item.event_time}
            location={item.location}
            eventCost={item.price}
          />
        );
      })}
      {/* <EventsCard />
      <EventsCard />
      <EventsCard /> */}
    </div>
  );
};
