import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

//Components
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import EditMenu from "./components/EditMenu";
import EditDrinks from "./components/EditDrinks";

function App() {
  const [fetchEntries, invokeFetch] = useState(true);
  // const [fetchMenu, updateFetchMenu] = useState(true);
  const [apps, updateApps] = useState([]);
  const [mains, updateMains] = useState([]);
  const [drinks, updateDrinks] = useState([]);
  const [alcoholDrinks, updateAlcoholDrinks] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/app9S6k06MQoTSJbG/mains?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateMains(data.data.records);
      // console.log(data.data.records);
    };
    apiCall();
    invokeFetch(false);
  }, [fetchEntries]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/app9S6k06MQoTSJbG/apps?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateApps(data.data.records);
      // console.log(data.data.records)
    };
    apiCall();
  }, [fetchEntries]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/app9S6k06MQoTSJbG/drinks?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateDrinks(data.data.records);
      console.log(data.data.records)
    };
    apiCall();
  }, [fetchEntries]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/app9S6k06MQoTSJbG/alcoholDrinks?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateAlcoholDrinks(data.data.records);
      // console.log(data.data.records);
    };
    apiCall();
  }, [fetchEntries]);

  return (
    <div>
      <Header />

      <h1>App JS Page</h1>

      <Route path="/MainMenu">
        <MainMenu
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks} />
      </Route>

      <Route path="/EditMenu/:type/:id">
        <EditMenu
          // fetchMenu={fetchMenu}
          // updateFetchMenu={updateFetchMenu}
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
        />
      </Route>

      <Route path="/EditDrinks/:type/:id">
        <EditDrinks
          // fetchMenu={fetchMenu}
          // updateFetchMenu={updateFetchMenu}
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
        />
      </Route>
    </div>
  );
}

export default App;
