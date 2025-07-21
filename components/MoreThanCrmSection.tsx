import { useState } from "react";
import Image from "next/image";
import clsx from "clsx"; // install this package for cleaner className logic

const tools = [
  {
    label: "Business Management",
    image: "/dashboard.png",
  },
  {
    label: "Order Management",
    image: "/orders.png",
  },
  {
    label: "Warehouse Management",
    image: "/products.png",
  },
  {
    label: "Finance Management",
    image: "/finances.png",
  },
  {
    label: "Invoice Generation",
    image: "/invoice.png",
  },
  {
    label: "Growth Analytics",
    image: "/growth.png",
  },
  {
    label: "HR & Team",
    image: "/users.png",
  }
];

export function MoreThanCrmSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const showIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full">
      {/* Tabs */}
      <ul className="w-full md:w-60 space-y-2">
        {tools.map((tool, idx) => (
          <li
            key={tool.label}
            className={clsx(
              "group flex items-center px-5 py-3 rounded-xl cursor-pointer transition-all select-none",
              showIdx === idx
                ? "bg-blue-50 text-blue-700 font-bold shadow-md"
                : "hover:bg-blue-100 hover:text-blue-700 text-gray-700"
            )}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setActiveIdx(idx)}
          >
            <span
              className={clsx(
                "w-3 h-3 mr-3 rounded-full border",
                showIdx === idx ? "bg-blue-700 border-blue-700" : "bg-white border-gray-300 group-hover:bg-blue-300"
              )}
            />
            {tool.label}
          </li>
        ))}
        <div className="mt-8">
          <a href="https://app.prime360.in/signup" target="_blank" rel="noopener noreferrer">
            <button className="w-full mt-2 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold px-5 py-3 rounded-lg shadow-md hover:scale-105 transition">
              START FOR FREE
            </button>
          </a>
        </div>
      </ul>
      {/* Screenshot */}
      <div
        className="w-full md:w-[430px] flex justify-center items-center relative h-[260px] md:h-[280px] rounded-2xl bg-gray-100/70 shadow-xl border border-gray-100"
        style={{ minWidth: 260, minHeight: 180 }}
      >
        <Image
          key={showIdx}
          src={tools[showIdx].image}
          alt={tools[showIdx].label}
          width={430}
          height={280}
          className="object-contain object-top rounded-xl transition-all duration-300"
          priority
        />
      </div>
    </div>
  );
}
