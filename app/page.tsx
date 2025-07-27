"use client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PricingCalculator from "../components/PricingCalculator";
import {
  motion,
  useScroll,
  useTransform,
  
} from "framer-motion";
import { useState, ReactNode } from "react";
import clsx from "clsx";

// ===== Data =====
const tools = [
  {
    label: "Business Management",
    image: "/dashboard.png",
    summary:
      "Centralized dashboard for analytics, team coordination, and tracking.",
    highlightColor: "from-indigo-500 to-violet-600",
  },
  {
    label: "Order Management",
    image: "/orders.png",
    summary: "Full order lifecycle management and customer communication.",
    highlightColor: "from-blue-500 to-indigo-600",
  },
  {
    label: "Warehouse Management",
    image: "/products.png",
    summary: "Inventory, multi-location, and replenishment automation.",
    highlightColor: "from-green-500 to-emerald-600",
  },
  {
    label: "Finance Management",
    image: "/finances.png",
    summary: "Cashflow, expenses, revenue, and reporting.",
    highlightColor: "from-teal-500 to-cyan-600",
  },
  {
    label: "Invoice Generation",
    image: "/invoice.png",
    summary: "Professional invoicing, reminders, and payments.",
    highlightColor: "from-purple-500 to-fuchsia-600",
  },
  {
    label: "Growth Analytics",
    image: "/growth.png",
    summary: "Trend analysis, KPIs, and forecasting.",
    highlightColor: "from-orange-500 to-amber-600",
  },
  {
    label: "HR & Team",
    image: "/users.png",
    summary: "Employee management, scheduling, payroll, compliance.",
    highlightColor: "from-rose-500 to-pink-600",
  },
];

const businessFeatures = [
  {
    title: "Inventory",
    icon: "🧑‍💼",
    content:
      "Real-time tracking, automated replenishment, multi-location management.",
  },
  {
    title: "Billing",
    icon: "💰",
    content: "Integrated invoicing, payments, expense/receipt workflows.",
  },
  {
    title: "Orders",
    icon: "📦",
    content: "Full order management, fulfillment, and tracking.",
  },
  {
    title: "Reminders",
    icon: "🔔",
    content: "Automated follow-ups, dues, and custom reminders.",
  },
  {
    title: "Customers",
    icon: "👥",
    content: "Client segmentation, communication, activity history.",
  },
  {
    title: "Transactions",
    icon: "💸",
    content: "Secure finance, records, sync with accounting tools.",
  },
];

const primeFeatures = [
  {
    icon: "🆓",
    title: "Free Plan",
    content: "Start for free. No credit card required. Upgrade anytime.",
  },
  {
    icon: "👥",
    title: "Unlimited Users",
    content: "Your whole team—no per-seat charges.",
  },
  {
    icon: "📞",
    title: "Unlimited Contacts",
    content: "Add, segment, and manage unlimited clients.",
  },
  {
    icon: "🔄",
    title: "Sales Pipelines",
    content: "Track every deal, automate stages, forecast revenue.",
  },
  {
    icon: "💾",
    title: "Data Storage",
    content: "Secure, encrypted, limitless.",
  },
  {
    icon: "📱",
    title: "Mobile Ready",
    content: "Full-featured iOS/Android apps.",
  },
  {
    icon: "🔗",
    title: "Integrations",
    content: "Works with WhatsApp, Gmail, Slack, and more.",
  },
  {
    icon: "🔒",
    title: "Security",
    content: "Bank-grade, GDPR/ISO-compliant, privacy-first.",
  },
  {
    icon: "👨‍💻",
    title: "24/7 Support",
    content: "Dedicated helpdesk, live chat, knowledgebase.",
  },
];

// ===== Animation Helpers =====
interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatePopProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}
function AnimatePop({ children, delay = 0, className = "" }: AnimatePopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275], delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ===== Main Component =====
const Home: NextPage = () => {
  const [hoveredToolIdx, setHoveredToolIdx] = useState<number | null>(null);
  const [clickedToolIdx, setClickedToolIdx] = useState(0);
  const displayToolIdx =
    hoveredToolIdx !== null ? hoveredToolIdx : clickedToolIdx;
  const { scrollYProgress } = useScroll();
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [1.05, 1]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200/60 via-white/60 to-blue-100/60 font-sans antialiased overflow-x-hidden">
      <Head>
        <title>Prime360 CRM — Your Smart Partner in Business Growth</title>
        <meta
          name="description"
          content="Discover Prime360 CRM by BharatGen Technologies for real-time client identity, orders, and data management."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      {/* Animated, Modern Glassy Background */}
      <div className="fixed -z-10 inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/40 to-transparent filter blur-3xl mix-blend-multiply"
          animate={{
            x: [0, 10, -5, 0],
            y: [0, -20, 15, 0],
            rotate: [0, 2, -1, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-gradient-to-br from-green-300/40 to-transparent filter blur-3xl mix-blend-multiply"
          animate={{
            x: [0, -15, 10, 0],
            y: [0, 25, -15, 0],
            rotate: [0, -3, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
        {/* === Hero === */}
        <section className="relative pt-28 pb-20 flex flex-col items-center text-center">
          <motion.h1
            style={{ scale: titleScale }}
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tighter"
          >
            Introducing Prime360 CRM
          </motion.h1>

          <AnimateOnScroll
            delay={0.2}
            className="mt-6 text-3xl font-medium text-gray-700"
          >
            Your Smart Partner in Business Growth!
          </AnimateOnScroll>
          <AnimateOnScroll
            delay={0.3}
            className="mt-4 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto"
          >
            Over 150 businesses registered with Prime360 since 2025—making it a
            widely used, customizable CRM solution.
          </AnimateOnScroll>
          <a
            href="https://drive.google.com/file/d/1rDEZigr2vq3z1u3gw-JLLNHY_Vw0742X/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block"
            aria-label="Download Brochure"
          >
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-3 mt-8 md:mt-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 hover:bg-gradient-to-br hover:from-teal-500 hover:to-teal-600 text-white font-semibold shadow-md border border-green-700 transition-colors duration-300"
              style={{ fontSize: "1.1rem", minWidth: 168 }}
            >
              <span className="mr-2" role="img" aria-label="download">
                💾
              </span>
              <span>Download Brochure</span>
            </button>
          </a>
          <AnimateOnScroll
            delay={0.4}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <a
              href="https://wa.me/919214549877?text=Hello%2C%20I%27d%20like%20to%20chat%20about%20a%20demo!"
              className="relative group flex items-center justify-center gap-2 px-5 py-3 rounded-xl shadow-md transition-all border-none text-white font-semibold text-sm sm:text-base"
              style={{
                backgroundColor: "#25D366",
                boxShadow: "0 4px 14px 0 rgba(37, 180, 85, 0.25)",
                minWidth: 170,
              }}
              aria-label="Chat on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
                aria-hidden
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.605.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.189-1.24-6.189-3.494-8.444" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="https://calendly.com/hrbharatgen/30min"
              target="_blank"
              rel="noopener"
              className="relative group"
              aria-label="Get Started for Free"
              style={{ minWidth: 170 }}
            >
              <button
                type="button"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-lg transition-all"
                style={{
                  fontFamily: "inherit",
                }}
              >
                Get Started — It’s Free
              </button>
            </a>
          </AnimateOnScroll>
        </section>

        {/* === Glassy "More Than CRM" & Tools Showcase === */}
        <AnimateOnScroll className="mt-14">
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-10 border border-white/80 shadow-2xl max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="mx-auto text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-green-600 mb-10 tracking-tight">
              More Than Just a CRM
            </h2>
            <div className="flex flex-col md:flex-row w-full md:items-center md:space-x-8 gap-8 md:gap-0">
              <nav
                aria-label="Tool Tabs"
                className="w-full md:w-56 flex-shrink-0"
              >
                <ul className="space-y-3">
                  {tools.map((tool, idx) => (
                    <motion.li
                      key={tool.label}
                      className={clsx(
                        "flex items-center px-4 py-2 rounded-lg cursor-pointer transition-all",
                        displayToolIdx === idx
                          ? "bg-blue-50 text-blue-700 font-semibold shadow-sm border-l-4 border-blue-500"
                          : "hover:bg-black/5 text-gray-700"
                      )}
                      tabIndex={0}
                      aria-selected={displayToolIdx === idx}
                      onMouseEnter={() => setHoveredToolIdx(idx)}
                      onMouseLeave={() => setHoveredToolIdx(null)}
                      onClick={() => setClickedToolIdx(idx)}
                      onKeyDown={(e) => {
                        if (
                          (e as React.KeyboardEvent).key === "Enter" ||
                          (e as React.KeyboardEvent).key === " "
                        )
                          setClickedToolIdx(idx);
                      }}
                    >
                      <span
                        className={clsx(
                          "w-3 h-3 mr-3 rounded-full border",
                          displayToolIdx === idx
                            ? "bg-blue-700 border-blue-700"
                            : "bg-white border-gray-300"
                        )}
                        aria-hidden
                      />
                      {tool.label}
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="https://calendly.com/hrbharatgen/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold px-5 py-3 rounded-lg shadow-md hover:scale-105 transition">
                      START FOR FREE
                    </button>
                  </a>
                </div>
              </nav>
              <div className="flex-1 w-full flex items-center justify-center">
                <div className="relative aspect-video max-w-lg min-w-[240px] w-full bg-gray-100/70 flex items-center justify-center shadow-xl border border-gray-200 overflow-hidden rounded-2xl">
                  {/* ALL images are rendered, only selected one is visible */}
                  {tools.map((tool, idx) => (
                    <motion.div
                      key={tool.image}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: displayToolIdx === idx ? 1 : 0 }}
                      transition={{ duration: 0.33, ease: "easeInOut" }}
                      className={clsx(
                        "absolute left-0 top-0 w-full h-full transition-opacity",
                        displayToolIdx === idx
                          ? "z-10"
                          : "z-0 pointer-events-none"
                      )}
                      style={{}}
                    >
                      {/* Only the selected image shows, others are hidden but *always* rendered so Next <Image> never loses its layout */}
                      <Image
                        src={tool.image}
                        alt={tool.label}
                        width={1000}
                        height={600}
                        className="w-full h-auto max-w-full max-h-full object-contain"
                        // Remove priority unless you want all images preloaded!
                        draggable={false}
                        style={{ userSelect: "none" }}
                      />
                    </motion.div>
                  ))}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/20 via-black/5 to-transparent p-6 text-white z-20">
                    <h3
                      className={`text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${tools[displayToolIdx].highlightColor} mb-2`}
                    >
                      {tools[displayToolIdx].label}
                    </h3>
                    <p className="text-white/90">
                      {tools[displayToolIdx].summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* === Business Coverage Features === */}
        <h2 className="text-2xl mt-20 sm:text-4xl font-extrabold mb-6 sm:mb-8 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-700 animate-pulse-slow text-center">
          Cover Any Kind of Business with Prime360 CRM
        </h2>
        <AnimateOnScroll className="mt-24 px-4 flex justify-center">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessFeatures.map((feat, idx) => (
              <motion.div
                key={feat.title}
                className="flex items-start gap-3 p-6 bg-white/80 backdrop-blur-2xl border border-white/90 rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 hover:bg-white transition-all duration-300"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <motion.span
                  className="text-3xl"
                  whileHover={{ rotate: 8, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-hidden
                >
                  {feat.icon}
                </motion.span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feat.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* === Glassy Features List Section === */}
        <AnimateOnScroll className="px-4 flex justify-center mt-20 mb-16">
          <div className="max-w-4xl w-full bg-white/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/90 shadow-xl relative overflow-hidden">
            <motion.div
              className="absolute -right-16 -top-8 w-56 h-56 bg-gradient-to-r from-blue-400/40 to-transparent rounded-full blur-3xl -z-10 animate-[float_16s_ease-in-out_infinite] pointer-events-none"
              animate={{ x: [0, 6, -3, 0], y: [0, -8, 6, 0] }}
              transition={{
                duration: 16,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-emerald-600 mb-8 text-center">
              Prime360 CRM Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {primeFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  className="flex flex-col justify-start items-start p-5 bg-white/90 border border-white/90 rounded-lg shadow-sm hover:shadow-lg hover:border-blue-300 hover:bg-white transition-all duration-300 min-h-[170px]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl mb-2" aria-hidden>
                    {feature.icon}
                  </span>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-2 flex-1">
                    {feature.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
        <PricingCalculator />

        {/* === Final Call to Action === */}
        <section className="mt-24 mb-28 flex justify-center" id="demo">
          <AnimatePop>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://calendly.com/hrbharatgen/30min"
                className="group relative inline-block"
                aria-label="Book Live Demo"
              >
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-gray-800 font-semibold shadow-md border border-gray-200"
                  style={{ fontSize: "1.1rem", minWidth: 168 }}
                >
                  <span className="mr-2" role="img" aria-label="calendar">
                    📅
                  </span>
                  <span>Book Demo</span>
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1rDEZigr2vq3z1u3gw-JLLNHY_Vw0742X/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block"
                aria-label="Download Brochure"
              >
                <button
                  type="button"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-br from-green-300 to-green-400 hover:bg-gradient-to-br hover:from-green-400 hover:to-green-500 text-white font-semibold shadow-md border border-green-700 transition-colors duration-300"
                  style={{ fontSize: "1.1rem", minWidth: 168 }}
                >
                  <span className="mr-2" role="img" aria-label="download">
                    📥
                  </span>
                  <span>Download Brochure</span>
                </button>
              </a>
            </div>
          </AnimatePop>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
