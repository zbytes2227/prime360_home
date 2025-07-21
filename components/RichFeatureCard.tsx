import { motion } from "framer-motion";
import { AnimateOnScroll } from "./Animate";

type RichFeatureCardProps = {
  icon: string;
  title: string;
  content: string;
  delay?: number;
};

export function RichFeatureCard({
  icon,
  title,
  content,
  delay = 0,
}: RichFeatureCardProps) {
  return (
    <AnimateOnScroll delay={delay}>
      <motion.div
        className="p-5 bg-white/90 border border-white/90 rounded-lg shadow-sm hover:shadow-lg hover:translate-y-[-4px] hover:border-blue-300 hover:bg-white transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-start gap-3">
          <motion.span
            className="text-2xl"
            whileHover={{ rotate: 12, y: -1 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon}
          </motion.span>
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="mt-1 text-gray-600 text-sm sm:text-base">{content}</p>
          </div>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
}
