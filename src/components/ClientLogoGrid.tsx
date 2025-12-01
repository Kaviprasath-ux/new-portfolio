"use client";

import { motion } from "framer-motion";
import { clients } from "@/lib/data";

export default function ClientLogoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
      {clients.map((client, index) => (
        <motion.div
          key={client.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="text-2xl font-bold text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 transition-colors cursor-default"
          >
            {client.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
