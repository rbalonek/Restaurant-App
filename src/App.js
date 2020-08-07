import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

//Components

import MainMenuEditor from "./components/Editor_Components/MainMenuEditor";
import EditMenu from "./components/Editor_Components/EditMenu";
import EditDrinks from "./components/Editor_Components/EditDrinks";
import DeleteButton from "./components/Editor_Components/DeleteButton";
import CreateMenuItem from "./components/Editor_Components/Create_Menu_Item/CreateMenuItem";
import CreateBillItem from "./components/Guest_Components/CreateBillItem";

// "Backend" for restaurant
import PasswordValidator from "./components/Editor_Components/PasswordValidator/PasswordValidator";

// "Guest Experience"
import WelcomePage from "./WelcomePage";
import LiveMenu from "./live_menu/LiveMenu";
import BillPage from "./components/Guest_Components/BillPage";
import DeleteAllButton from "./components/Editor_Components/DeleteAllButton";

function App() {
  const [fetchEntries, invokeFetch] = useState(true);
  const [apps, updateApps] = useState([]);
  const [mains, updateMains] = useState([]);
  const [drinks, updateDrinks] = useState([]);
  const [alcoholDrinks, updateAlcoholDrinks] = useState([]);
  const [customerBill, updateCustomerBill] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/app9S6k06MQoTSJbG/customerBill?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateCustomerBill(data.data.records);
    };
    apiCall();
  }, [fetchEntries]);

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
    };
    apiCall();
  }, [fetchEntries]);

  return (
    <div>
      <WelcomePage />

      <Route path="/PasswordValidator">
        <PasswordValidator />
      </Route>

      <Route path="/MainMenuEditor">
        <MainMenuEditor
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

      <Route path="/DeleteAllButton">
        <DeleteAllButton
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

      <Route path="/CreateBillItem/:type/:id">
        <CreateBillItem fetchEntries={fetchEntries} invokeFetch={invokeFetch} />
      </Route>

      <Route path="/LiveMenu">
        <LiveMenu
          fetchEntries={fetchEntries}
          invokeFetch={invokeFetch}
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
        />
      </Route>

      <Route path="/BillPage">
        <BillPage
          apps={apps}
          mains={mains}
          drinks={drinks}
          alcoholDrinks={alcoholDrinks}
          customerBill={customerBill}
        />
      </Route>
    </div>
  );
}

export default App;
