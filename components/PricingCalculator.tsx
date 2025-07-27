import React, { useState } from "react";

// Define types for plans and plan types
type Plan = "2year" | "1year" | "monthly";
type PlanType = "plan1" | "plan2";

interface PriceStructure {
  [key: string]: {
    [key in Plan]: number;
  };
}

const PricingCalculator: React.FC = () => {
  const [users, setUsers] = useState<number>(1);
  const [planType, setPlanType] = useState<PlanType>("plan1");
  const [plan, setPlan] = useState<Plan>("2year");

  const prices: PriceStructure = {
    plan1: {
      "2year": 3999,
      "1year": 2388,
      monthly: 259,
    },
    plan2: {
      "2year": 3499,
      "1year": 1909,
      monthly: 179,
    },
  };

  const calculatePrice = (): number => {
    return users * prices[planType][plan];
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md justify-center mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Prime360 CRM Pricing Calculator
      </h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Plan Type:</label>
        <select
          id="planType"
          value={planType}
          onChange={(e) => setPlanType(e.target.value as PlanType)}
          className="w-full p-2 border rounded"
        >
          <option value="plan1">Plan 1 (With App + Website)</option>
          <option value="plan2">Plan 2 (Only Website)</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Plan:</label>
        <select
          id="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value as Plan)}
          className="w-full p-2 border rounded"
        >
          <option value="2year">2-Year Plan</option>
          <option value="1year">1-Year Plan</option>
          <option value="monthly">Monthly Plan</option>
        </select>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Estimated Cost:</h2>
        <p className="text-xl font-bold text-green-600">
          ₹{calculatePrice()} {plan === "monthly" ? "/month" : ""}
        </p>
      </div>
      <div className="mt-4 text-gray-600">
        <p>* 30 Days Free License available</p>
      </div>
    </div>
  );
};

export default PricingCalculator;
