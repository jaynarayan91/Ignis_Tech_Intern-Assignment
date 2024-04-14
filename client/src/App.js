import { useState } from "react";
import "./App.css";
import { EventsCard } from "./components/EventsCard/EventsCard";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  return (
    <div className="App bg-white">
      <Navbar
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        searchData={searchData}
        setSearchData={setSearchData}
      />
        
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
