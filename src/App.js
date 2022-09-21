import "./App.css";
import Sidebar from "./components/Sidebar";
import Campaign from "./components/Campaign";
import NewCampaign from "./components/NewCampaign";
import ChooseProduct from "./components/ChooseProduct";
import Settings from "./components/Settings";
import Ready from "./components/Ready";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="grid md:grid md:grid-cols-12 sm:grid-cols-12">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Campaign />} />
        <Route path="/campaign" element={<NewCampaign />} />
        <Route path="/chooseProduct" element={<ChooseProduct />} />
        <Route path="/campaignSettings" element={<Settings />} />
        <Route path="/readyToGo" element={<Ready />} />
      </Routes>
    </div>
  );
}

export default App;
