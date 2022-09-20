import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Campaign from "./components/Campaign";

function App() {
  return (
    <div className="grid md:grid md:grid-cols-12 sm:grid-cols-12">
      <div className="col-span-1 md:col-span-1 sm:col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-11 md:col-span-11 sm:col-span-11 flex flex-col">
        <Navbar />
        <Campaign />
      </div>
    </div>
  );
}

export default App;
