import React from "react";
import { useState } from "react";
import AltImg from '../../images/event.png';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { FcLike } from 'react-icons/fc';
import './EventCard.css';
export const EventsCard = (props) => {
  const {
    id,
    eventImg,
    eventTitle,
    eventDate,
    eventTime,
    location,
    eventCost,
    likes
  } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [updateEvent, setUpdateEvent] = useState({ ...props });
  
    const handleClick = (e) => {
      setIsClicked(!isClicked);
      if (isClicked === true) {
        setUpdateEvent({ ...props, likes: likes + 1 })
        updateLikes();
      }
      else if (isClicked === false) {
        setUpdateEvent({...props, likes: likes-1})
        updateLikes();
      }
  };
  
  let updateLikes = async () => {
    const props = await fetch(
      `http://127.0.0.1:8000/api/events/${eventTitle}/update/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateEvent),
      }
    );
    const response = await props.json();
    console.log(response);
  } 
  return (
    <div key={id} className="lg:w-1/2 border rounded-md flex justify-between">
      <div className="flex">
        <div className="flex items-start">
          <img src={AltImg || eventImg} alt="Event" className="w-60 m-2" />
        </div>
        <div className="flex items-start m-2 flex-col">
          <h1 className="font-bold ">{eventTitle || "Title of the Event"}</h1>
          <h2 className="text-gray-500 text-sm">
            {eventDate || "11/12/23"}, {eventTime || "19:00 AM IST"},{" "}
            {location || "Mumbai"}
          </h2>
          <p className="text-gray-500 text-sm">
            Starts at {eventCost || "100"}
          </p>
        </div>
      </div>
      <div className="flex items-start m-2 relative">
        <button className="visited:bg-red-500">
          {/* <AiOutlineHeart
            // color={heartColor}
            onClick={handleClick}
            className="absolute bottom-0 right-10 m-2"
          /> */}
          {isClicked ? (
            <FcLike
              className="absolute bottom-0 right-0 m-2"
              onClick={handleClick}
            />
          ) : (
            <AiOutlineHeart
              className="absolute bottom-0 right-0 m-2"
              onClick={handleClick}
            />
          )}
        </button>
        <AiOutlineUpload className="absolute bottom-0 hover:text-2xl right-20 m-2" />
      </div>
    </div>
  );
};
