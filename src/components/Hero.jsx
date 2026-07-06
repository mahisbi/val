import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const messages = [
  "But you are single… 😭",
  "You don’t even have friends…",
  "You also need to socialise for that…",
  "Maybe start with saying hi to humans?",
  "Even your GitHub has more commits than your love life 🌱",
];

const Hero = () => {
  const [step, setStep] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // YES button runs FAR away now
  const moveButton = () => {
    const x = (Math.random() - 0.5) * 600; // bigger horizontal range
    const y = (Math.random() - 0.5) * 400; // bigger vertical range

    setPos({ x, y });

    if (step <= messages.length) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="hero">
      <div className="card">
        {step <= messages.length ? (
          <>
            <h1>Divya, will you be anyone’s Valentine? 💌</h1>

            <div className="msgWrap">
              {messages.slice(0, step).map((m, i) => (
                <motion.p
                  key={i}
                  className="msg"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: i * 0.05,
                  }}
                >
                  {m}
                </motion.p>
              ))}
            </div>

            <div className="btns">
              <button
                className="yes"
                onMouseEnter={moveButton}
                onClick={moveButton}
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px)`,
                }}
              >
                Yes
              </button>

              <button
                className="no"
                onClick={() => setStep(messages.length + 1)}
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div className="success">
            <h1>You made the best choice ✨</h1>

            <motion.p
              className="msg"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              Because you don't even have a choice...
            </motion.p>

            <img
              src="https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif"
              alt="clapping"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
