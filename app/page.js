"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-red-100 p-4">
      <AnimatePresence>
        {yesPressed ? (
          <motion.div
            key="yesPressed"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="flex flex-col items-center space-y-4"
          >
            <motion.img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear kiss"
              className="rounded-lg shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.div
              className="text-4xl font-bold my-4 text-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Ok yay!!! "Does this mean I get to spoil you on Valentine’s Day?"
              💕
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="notYesPressed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="flex flex-col items-center space-y-8"
          >
            <motion.img
              className="h-[200px] hover:scale-110 transition-transform duration-300"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="Bear with roses"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-pink-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Will you be my Valentine? 😉
            </motion.h1>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg`}
                style={{ fontSize: `${yesButtonSize}px` }}
                onClick={() => setYesPressed(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Yes
              </motion.button>
              <motion.button
                onClick={handleNoClick}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transform hover:scale-95 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.1 }}
              >
                {getNoButtonText()}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
