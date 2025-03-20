import React, { useState } from "react";
import { useCarbonStore } from "./store";
import { Button,Input } from "./components/ui/button";

export default function App() {
  const { footprint, setFootprint, recommendations, setRecommendations } = useCarbonStore();
  const [travelDistance, setTravelDistance] = useState("");
  const [transport, setTransport] = useState("car");
  const [loading, setLoading] = useState(false);

  const calculateFootprint = async () => {
    if (!travelDistance || isNaN(travelDistance)) return;
    setLoading(true);

    try {
      const response = await fetch("https://bnz-green-test-backend-production.up.railway.app/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ distance: travelDistance, transport }),
      });

      const data = await response.json();
      setFootprint(data.footprint);

      if (data.recommendations) {
        setRecommendations(data.recommendations.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"));
      } else {
        setRecommendations("No recommendations available.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 px-6 py-16">
      <div className="bg-white p-12 rounded-3xl shadow-2xl w-full max-w-lg text-center transform scale-105">
        <h1 className="text-4xl font-extrabold text-green-700 mb-8">Carbon FootPrint Tracker with AI Recommendations </h1>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700 text-left">Enter Travel Distance (km):</label>
          <Input
            type="number"
            placeholder="e.g. 50"
            value={travelDistance}
            onChange={(e) => setTravelDistance(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700 text-left">Select Transport Type:</label>
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 bg-white shadow-sm"
          >
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="bike">Bike</option>
            <option value="walking">Walking</option>
          </select>
        </div>

        <Button onClick={calculateFootprint} className="w-full py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300 shadow-md">
          {loading ? "Calculating..." : "Calculate"}
        </Button>

        {loading && <p className="mt-4 text-gray-600">Fetching data, please wait...</p>}

        {footprint !== null && !loading && (
          <div className="mt-8 text-left p-6 bg-gray-50 rounded-xl shadow-md">
            <p className="text-xl font-semibold text-gray-800">Carbon Footprint: <span className="text-green-700">{footprint.toFixed(2)} kg CO₂</span></p>
            <h2 className="text-lg font-semibold text-gray-800 mt-4">Recommendations:</h2>
            <div className="prose mt-4 bg-gray-100 p-5 rounded-xl shadow-lg border border-gray-200" dangerouslySetInnerHTML={{ __html: recommendations || "<p>No recommendations available.</p>" }} />
          </div>
        )}
      </div>
    </div>
  );
}