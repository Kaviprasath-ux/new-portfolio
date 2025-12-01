"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Service } from "@/lib/data";

interface ServiceAccordionProps {
  services: Service[];
}

export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <button
            onClick={() => toggleService(service.id)}
            className="w-full py-6 flex items-center justify-between text-left group"
            aria-expanded={openId === service.id}
          >
            <span className="text-xl md:text-2xl font-semibold group-hover:text-muted transition-colors">
              {service.title}
            </span>
            <motion.div
              animate={{ rotate: openId === service.id ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="M5 12h14" />
              </svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {openId === service.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-muted max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
