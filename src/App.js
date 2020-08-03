import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

//Components

import MainMenu from "./components/MainMenuEditor";
import EditMenu from "./components/EditMenu";
import EditDrinks from "./components/EditDrinks";
import DeleteButton from "./components/DeleteButton";
import CreateMenuItem from "./components/CreateMenuItem";

// "Backend" for restaurant
import EditorMain from "./editor-menu/EditorMain"

// "Guest Experience"
import WelcomePage from "./WelcomePage"

function App() {
  const [fetchEntries, invokeFetch] = useState(true);
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
      // console.log(data.data.records)
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
      <WelcomePage />
      <Route path="/MainMenuEditor">
        <MainMenu
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
        />
      </Route>

      <Route path="/EditMenu/:type/:id">
        <EditMenu
          fetchEntries={fetchEntries}
          invokeFetch={invokeFetch}
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
        />
      </Route>

      <Route path="/EditDrinks/:type/:id">
        <EditDrinks
          fetchEntries={fetchEntries}
          invokeFetch={invokeFetch}
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
        />
      </Route>

      <Route path="/DeleteButton">
        <DeleteButton
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
          fetchEntries={fetchEntries}
          invokeFetch={invokeFetch}
        />
      </Route>

      <Route path="/CreateMenuItem">
        <CreateMenuItem fetchEntries={fetchEntries} invokeFetch={invokeFetch} />
      </Route>

      <Route path="/EditorMain">
      <EditorMain />
      </Route>
    </div>
  );
}

export default App;
