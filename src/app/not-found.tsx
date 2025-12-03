"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-xl"
      >
        {/* 404 */}
        <motion.div
          className="text-[12rem] md:text-[16rem] font-medium leading-none text-surface select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          404
        </motion.div>

        <div className="relative -mt-20 md:-mt-32">
          <motion.h1
            className="text-3xl md:text-4xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Page not found
          </motion.h1>

          <motion.p
            className="text-text-secondary text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              href="/"
              icon={<Home className="w-4 h-4" />}
              iconPosition="left"
            >
              Go Home
            </Button>
            <Button
              href="/#contact"
              variant="outline"
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
