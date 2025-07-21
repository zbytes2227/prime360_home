import { motion } from "framer-motion";
import { AnimateOnScroll } from "./Animate";

type FeatureSectionCardProps = {
  title: string;
  icon: string;
  content: string;
  delay?: number;
};

export function FeatureSectionCard({
  title,
  icon,
  content,
  delay = 0,
}: FeatureSectionCardProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <motion.div
        className="p-6 bg-white/80 backdrop-blur-sm border border-white/90 rounded-xl shadow-md hover:shadow-lg hover:bg-white/90 transition-all"
        whileHover={{ y: -4 }}
        transition={{ type: "spring" }}
      >
        <div className="flex items-start gap-3">
          <motion.span
            className="text-3xl"
            whileHover={{ rotate: 8, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.span>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{content}</p>
          </div>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
}
