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
    return prices[planType][plan];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all hover:shadow-3xl">
        <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-teal-600 to-indigo-600 bg-clip-text text-transparent">
          Prime360 CRM Pricing
        </h1>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Plan Type</label>
          <select
            id="planType"
            value={planType}
            onChange={(e) => setPlanType(e.target.value as PlanType)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-gray-50 hover:bg-white appearance-none"
          >
            <option value="plan1">Plan 1 (App + Website)</option>
            <option value="plan2">Plan 2 (Website Only)</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 font-semibold mb-2">Billing Plan</label>
          <select
            id="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value as Plan)}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-gray-50 hover:bg-white appearance-none"
          >
            <option value="2year">2-Year Plan</option>
            <option value="1year">1-Year Plan</option>
            <option value="monthly">Monthly Plan</option>
          </select>
        </div>

        <div className="text-center bg-gray-50 p-6 rounded-xl border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Estimated Cost</h2>
          <p className="text-4xl font-bold text-teal-600">
            ₹{calculatePrice().toLocaleString()}
            <span className="text-base text-gray-500 ml-2">
              {plan === "monthly" ? "/month" : ""}
            </span>
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            * 30 Days Free License Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;