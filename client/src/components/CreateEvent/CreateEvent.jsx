import React from "react";
import { useState } from "react";

export const CreateEvent = () => {
  // const [createEvent, setCreateEvent] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('====================================');
    console.log(e.currentTarget);
    console.log('====================================');
    const formData = new FormData(e.currentTarget);
    console.log([...formData.entries()]);
    // console.log(e.target.elements);
    // setCreateEvent(true);
    // e.target.clear();
    e.target.reset();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <fieldset className="border m-2 rounded-md flex flex-col shadow-lg">
        <legend className="text-gray-600 text-sm ">Event Details</legend>

        <div className="items-start flex flex-row justify-between m-2">
          <label htmlFor="event-name" className="text-lg m-2">
            Event Name
          </label>
          <input
            type="text"
            // value={eventDetails.eventName}
            // onChange={(e) =>
            //   setEventDetails({ ...eventDetails, eventName: e.target.value })
            // }
            name="event-name"
            id="event-name"
            placeholder="Title of event"
            required={true}
            className="border border-black rounded-md text-lg m-2"
          />
        </div>
        <div className="flex flex-row justify-between items-start m-2">
          <label htmlFor="event-date" className="text-lg m-2">
            Event Date
          </label>
          <input
            type="date"
            // value={eventDetails.eventDate}
            // onChange={(e) =>
            //   setEventDetails({ ...eventDetails, eventDate: e.target.value })
            // }
            name="event-date"
            id="event-date"
            required={true}
            className="border border-black rounded-md text-lg m-2"
          />
        </div>
        <div className="items-start flex flex-row justify-between m-2">
          <label htmlFor="event-time" className="text-lg m-2">
            Event Time
          </label>
          <input
            type="time"
            // value={eventDetails.eventTime}
            // onChange={(e) =>
            //   setEventDetails({ ...eventDetails, eventTime: e.target.value })
            // }
            name="event-time"
            id="event-time"
            required={true}
            className="border border-black rounded-md text-lg m-2"
          />
        </div>
        <div className="items-start flex flex-row justify-between m-2">
          <label htmlFor="location" className="text-lg m-2">
            Event Location
          </label>
          <input
            type="text"
            // value={eventDetails.location}
            // onChange={(e) =>
            //   setEventDetails({ ...eventDetails, location: e.target.value })
            // }
            name="location"
            id="location"
            placeholder="Avenue, City"
            required={true}
            className="border border-black rounded-md text-lg m-2"
          />
        </div>
        <div className="items-start flex flex-row justify-between m-2">
          <label htmlFor="price" className="text-lg m-2">
            Ticket Price
          </label>
          <input
            type="number"
            // value={setEventDetails(eventDetails.price)}
            // onChange={(e) =>
            //   setEventDetails({
            //     ...eventDetails,
            //     price: Number.parseInt(e.target.value),
            //   })
            // }
            name="price"
            id="price"
            required={true}
            className="border border-black rounded-md text-lg m-2"
          />
        </div>
        <div className="items-start flex flex-row justify-between m-2">
          <label htmlFor="image" className="text-lg m-2">
            Event Image
          </label>
          <input
            type="file"
            // value={eventDetails.image}
            // onChange={(e) =>
            //   setEventDetails({ ...eventDetails, eventImage: e.target.value })
            // }
            name="image"
            id="image"
            className="border border-black rounded-md text-lg m-2"
          />
        </div>
        <div className="relative">
          <button
            type="submit"
            className="bg-gradient-to-r from-red-400 via-red-500 to-pink-500 text-white py-2 px-4 rounded-full hover:shadow-lg m-2"
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};
