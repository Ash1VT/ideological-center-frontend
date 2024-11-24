import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedBlocks = () => {
  const [showSecondBlock, setShowSecondBlock] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
      {/* Контейнер для анимации */}
      <motion.div
        initial={{ x: 0 }} // Указание начального состояния
        animate={{
          x: showSecondBlock ? 150 : 0, // Сдвиг вправо при появлении второго блока
        }}
        transition={{ duration: 0.5 }}
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* Первый блок */}
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "blue",
            marginRight: 10,
          }}
        ></div>
      </motion.div>

      {/* Второй блок с анимацией */}
      <AnimatePresence>
        {showSecondBlock && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Кнопка */}
      <button
        onClick={() => setShowSecondBlock((prev) => !prev)}
        style={{ marginLeft: 20 }}
      >
        Toggle Block
      </button>
    </div>
  );
};

export default AnimatedBlocks;