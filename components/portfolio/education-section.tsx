"use client";

import React from "react"
import { motion } from "framer-motion";
import { ConstructionState } from "../extras/construction-state";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function EducationSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0 }}
      className="relative min-h-[400px] flex flex-col justify-center"
    >
      <ConstructionState />
    </motion.div>
  );
}