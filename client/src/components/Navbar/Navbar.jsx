import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { BrowseEvent } from "../../pages/BrowseEvents/BrowseEvent";
import { HostEvent } from "../../pages/HostEvents/HostEvent";

export const Navbar = ({ searchTerm, setSearchTerm, searchData, setSearchData }) => {
  const [canSearch, setCanSearch] = useState(false);
  const searchEvent = (e) => {
    e.preventDefault();
    setCanSearch(true);
    const fetchEvent = async () => {
      const data = await fetch(
        `http://127.0.0.1:8000/api/events/${searchTerm}`
      );
      const response = await data.json();
      console.log(response);
      setSearchData(response);
      setCanSearch(false);
    };
    fetchEvent();
  };

  // useEffect(() => {
    
  // }, [canSearch]);

  return (
    <>
      <Router>
        <nav className="flex justify-between bg-slate-100 border-black">
          <ul className="flex items-start p-2 navbar">
            <li className="nav-links text-red-600 p-2 font-bold">
              <h1 className="font-extrabold text-lg">eventbrite</h1>
            </li>
            <li className="flex items-start p-2">
              <button onClick={searchEvent}>
                <RiSearchLine className="text-gray-600 m-2" />
              </button>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for events"
                className="rounded-full border p-0.5 "
              />
            </li>
          </ul>
          <ul className="flex items-start navbar">
            <li className="text-gray-700 p-3 hover:text-gray-900">
              <Link to="/">
                <p>Browse Event</p>
              </Link>
            </li>
            <Link to="/hostevent">
              <li className="flex items-start text-gray-700 p-3 hover:text-gray-900">
                <p className="pr-1">Host an event</p>
                <FaChevronDown className="text-gray-700  hover:text-gray-900 mt-1" />
              </li>
            </Link>
            <li className="flex items-start text-gray-700 p-3 hover:text-gray-900">
              <p className="pr-1">Help</p>
              <FaChevronDown className="text-gray-700  hover:text-gray-900 mt-1" />
            </li>
            <li className="text-gray-700 p-3 hover:text-gray-900"></li>
          </ul>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <BrowseEvent
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                searchData={searchData}
                setSearchData={setSearchData}
              />
            }
          />
          <Route
            path="/hostevent"
            element={
              <HostEvent
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                searchData={searchData}
                setSearchData={setSearchData}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};
