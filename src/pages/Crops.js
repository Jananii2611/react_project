import React, { useState, useRef, useEffect } from "react";
import { fetchCrops, addCrop } from "../api/mockApi";
import CropCard from "../components/CropCard";
import Pagination from "../components/Pagination";
import LoadingHOC from "../components/LoadingHOC";
import ErrorBoundary from "../components/ErrorBoundary";
import "../styles/Crops.css";

function Crops() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", sowingDate: "", harvestDate: "", soilType: "" });
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [current, setCurrent] = useState(1);
  const perPage = 2;
  const inputRef = useRef();

  useEffect(() => {
    fetchCrops().then(data => { setCrops(data); setLoading(false); });
  }, []);
  useEffect(() => { if (showForm && inputRef.current) inputRef.current.focus(); }, [showForm]);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.sowingDate || !form.harvestDate || !form.soilType) return setError("All fields required.");
    await addCrop(form);
    fetchCrops().then(data => setCrops(data));
    setShowForm(false);
    setForm({ name: "", sowingDate: "", harvestDate: "", soilType: "" });
  };
  // Sorting logic
  const sortedCrops = [...crops].sort((a, b) =>
    (a[sortBy] > b[sortBy]) ? 1 : -1
  );
  // Pagination logic
  const total = Math.ceil(sortedCrops.length / perPage);
  const paged = sortedCrops.slice((current - 1) * perPage, current * perPage);

  return (
    <ErrorBoundary>
      <div className="crops-container">
        <h2>Crops</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1em" }}>
          <button className="add-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? "Cancel" : "Add Crop"}
          </button>
          <div>Sort by:{" "}
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
              <option value="name">Name</option>
              <option value="sowingDate">Sowing Date</option>
              <option value="harvestDate">Harvest Date</option>
            </select>
          </div>
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {showForm && (
          <form className="crop-form" onSubmit={handleSubmit}>
            <input ref={inputRef} name="name" placeholder="Crop Name" value={form.name} onChange={handleChange} required />
            <input name="sowingDate" type="date" value={form.sowingDate} onChange={handleChange} required />
            <input name="harvestDate" type="date" value={form.harvestDate} onChange={handleChange} required />
            <input name="soilType" placeholder="Soil Type" value={form.soilType} onChange={handleChange} required />
            <button type="submit">Save</button>
          </form>
        )}
        <div className="crops-list">
          <PagedCrops crops={paged} loading={loading} />
        </div>
        <Pagination current={current} total={total} onPage={setCurrent} />
      </div>
    </ErrorBoundary>
  );
}

// HOC usage
const PagedCrops = LoadingHOC(({ crops }) =>
  crops.length === 0 ? <p>No crops found.</p> : crops.map(c => <CropCard key={c.id} crop={c} />)
);

export default Crops;
