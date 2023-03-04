import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div>
      <Veggie />
      <Popular />
    </motion.div>
  );
}

export default Home;
