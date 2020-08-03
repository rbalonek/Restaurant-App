import React, { useState, useEffect } from "react";
// import { Route } from "react-router-dom";
import axios from "axios";
import './App.css';

const BASE_URL =
  "https://api.airtable.com/v0/app9S6k06MQoTSJbG/Menu/recAxDasgD2mOAMkV";

function App() {
  const [mains, updateMains] = useState([]); // to store our records
  // const [fetchEntries, invokeFetch] = useState(true); // grab new records
  // const [thing, updateThing] = useEffect([]);

  useEffect(() => {
    const getAirtableRecords = async () => {
      const data = await axios.get(`${BASE_URL}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      updateMains(data.data);
      console.log(data);
    };
    getAirtableRecords();
  }, []);

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
