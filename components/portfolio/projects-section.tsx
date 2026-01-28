"use client";

import React from "react"
import { motion } from "framer-motion";
import { ConstructionState } from "../extras/construction-state";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function ProjectsSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-[400px] flex flex-col justify-center"
    >
      <ConstructionState />
    </motion.div>
  );
}