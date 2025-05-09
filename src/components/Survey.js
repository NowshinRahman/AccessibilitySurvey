import React, { useState } from "react";
import AudioButton from "./AudioButton";
import Modal from "./Modal";

import q1 from "../assets/Question1.mp3";
import q2 from "../assets/Question2.mp3";
import q3 from "../assets/Question3.mp3";
import q4 from "../assets/Question4.mp3";
import q5 from "../assets/Question5.mp3";
import q6 from "../assets/Question6.mp3";
import q7 from "../assets/Question7.mp3";
import q8 from "../assets/Question8.mp3";
import q9 from "../assets/Question9.mp3";
import q10 from "../assets/Question10.mp3";
import q11 from "../assets/Question11.mp3";
import q12 from "../assets/Question12.mp3";

import q1home from "../assets/Q1_1.png";
import q1people from "../assets/Q1_2.png";
import q1space from "../assets/Q1_3.png";
import q1activity from "../assets/Q1_4.png";

import q2fun from "../assets/Q2_1.png";
import q2friendly from "../assets/Q2_2.png";
import q2supportive from "../assets/Q2_3.png";
import q2groupactivity from "../assets/Q2_4.png";

import q3treat from "../assets/Q3_1.png";
import q3neutral from "../assets/Q3_2.png";
import q3ignored from "../assets/Q3_3.png";

import q4happy from "../assets/Q10_1.png";
import q4encouraged from "../assets/Q10_2.png";
import q4unsure from "../assets/Q10_3.png";
import q4sad from "../assets/Q10_4.png";
import q4angry from "../assets/Q10_5.png";

import q5room from "../assets/Q5_1.png";
import q5garden from "../assets/Q5_2.png";
import q5quietcorner from "../assets/Q5_3.png";
import q5livingroom from "../assets/Q5_4.png";

import q6art from "../assets/Q8_4.png";
import q6reading from "../assets/Q6_2.png";
import q6exercise from "../assets/Q6_3.png";
import q6games from "../assets/Q6_4.png";
import q6music from "../assets/Q6_5.png";
import q6everything from "../assets/Q6_4.png";
import q6unsure from "../assets/Q6_4.png";

import q7morning from "../assets/Q7_1.png";
import q7afternoon from "../assets/Q7_2.png";
import q7evening from "../assets/Q7_3.png";
import q7weekends from "../assets/Q7_4.png";

import q8foodie from "../assets/Q8_1.png";
import q8clothes from "../assets/Q8_2.png";
import q8toysgifts from "../assets/Q8_3.png";
import q8art from "../assets/Q8_4.png";

import q9spender from "../assets/Q9_1.png";
import q9logical from "../assets/Q9_2.png";
import q9wishful from "../assets/Q9_3.png";
import q9broke from "../assets/Q9_4.png";

import q10supportive from "../assets/Q10_1.png";
import q10happy from "../assets/Q10_2.png";
import q10okay from "../assets/Q10_3.png";
import q10sad from "../assets/Q10_4.png";
import q10angry from "../assets/Q10_5.png";

import q11breakfast from "../assets/Q11_1.png";
import q11lunch from "../assets/Q11_2.png";
import q11dinner from "../assets/Q11_3.png";
import q11specialoccasion from "../assets/Q11_4.png";

import q12fastfood from "../assets/Q12_1.png";
import q12seafood from "../assets/Q12_2.png";
import q12fruitandveg from "../assets/Q12_3.png";
import q12dessert from "../assets/Q12_4.png";
import q12meat from "../assets/Q12_5.png";

const questions = [
  {
    id: 1,
    text: "Q1. What do you like most about living here or going to your day program?",
    audio: q1,
    options: ["Comfortable home", "Friendly people", "Outdoor space", "Activities and programs"],
  },
  {
    id: 2,
    text: "Q2. What do you like about the people you live with or see at your day program?",
    audio: q2,
    options: ["We have fun together", "They are friendly and kind", "They help and support me", "We work together on activities"],
  },
  {
    id: 3,
    text: "Q3. How do the people you live with treat you? (Residential only)",
    audio: q3,
    options: ["They treat me well", "They are neutral", "I feel ignored"],
    canSkip: true,
  },
  {
    id: 4,
    text: "Q4. How do the staff make you feel?",
    audio: q4,
    options: ["Supportive", "Happy", "Unsure", "Sad", "Angry"],
  },
  {
    id: 5,
    text: "Q5. Where can you spend some time alone? (Residential only)",
    audio: q5,
    options: ["My room", "In the garden or yard", "In a quiet corner with music", "In the living room or lounge"],
    canSkip: true,
  },
  {
    id: 6,
    text: "Q6. What do you enjoy doing in your free time?",
    audio: q6,
    options: ["Art and crafts", "Reading or writing", "Exercise or sports", "Playing games", "Listening to music"],
  },
  {
    id: 7,
    text: "Q7. When do you usually get to do those things?",
    audio: q7,
    options: ["In the morning", "In the afternoon", "In the evening", "On weekends"],
  },
  {
    id: 8,
    text: "Q8. What do you like to buy when you go out?",
    audio: q8,
    options: ["Food", "Clothes", "Toys or gifts", "Art or souvenirs"],
  },
  {
    id: 9,
    text: "Q9. Can you buy the things you want when you go out?",
    audio: q9,
    options: ["Yes, I can buy what I want", "I can buy some things, but not everything", "No, I can’t buy what I want", "I can buy basic necessities"],
  },
  {
    id: 10,
    text: "Q10. How do you feel today?",
    audio: q10,
    options: ["Supportive", "Happy", "Unsure", "Sad", "Angry"],
  },
  {
    id: 11,
    text: "Q11. When do you usually get to eat your favorite foods?",
    audio: q11,
    options: ["For breakfast", "For lunch", "For dinner", "On special occassions"],
  },
  {
    id: 12,
    text: "Q12. What are your favorite foods?",
    audio: q12,
    options: ["Fast Food", "Seafoods", "Fruits and Vegetables", "Desserts", "Meat"],
  },
];

const q1Images = {
  "Comfortable home": q1home,
  "Friendly people": q1people,
  "Outdoor space": q1space,
  "Activities and programs": q1activity,
};

const q2Images = {
  "We have fun together": q2fun,
  "They are friendly and kind": q2friendly,
  "They help and support me": q2supportive,
  "We work together on activities": q2groupactivity,
};

const q3Images = {
  "They treat me well": q3treat,
  "They are neutral": q3neutral,
  "I feel ignored": q3ignored,
};

const q4Images = {
  "Supportive": q4happy,
  "Happy": q4encouraged,
  "Unsure": q4unsure,
  "Sad": q4sad,
  "Angry": q4angry,
};

const q5Images = {
  "My room": q5room,
  "In the garden or yard": q5garden,
  "In a quiet corner with music": q5quietcorner,
  "In the living room or lounge": q5livingroom,
};

const q6Images = {
  "Art and crafts": q6art,
  "Reading or writing": q6reading,
  "Exercise or sports": q6exercise,
  "Playing games": q6games,
  "Listening to music": q6music,
};

const q7Images = {
  "In the morning": q7morning,
  "In the afternoon": q7afternoon,
  "In the evening": q7evening,
  "On weekends": q7weekends,
};

const q8Images = {
  "Food": q8foodie,
  "Clothes": q8clothes,
  "Toys or gifts": q8toysgifts,
  "Art or souvenirs": q8art,
};

const q9Images = {
  "Yes, I can buy what I want": q9spender,
  "I can buy some things, but not everything": q9logical,
  "No, I can’t buy what I want": q9wishful,
  "I can buy basic necessities": q9broke,
};

const q10Images = {
  "Supportive": q10supportive,
  "Happy": q10happy,
  "Unsure": q10okay,
  "Sad": q10sad,
  "Angry": q10angry,
};

const q11Images = {
  "For breakfast": q11breakfast,
  "For lunch": q11lunch,
  "For dinner": q11dinner,
  "On special occassions": q11specialoccasion,
};

const q12Images = {
  "Fast Food": q12fastfood,
  "Seafoods": q12seafood,
  "Fruits and Vegetables": q12fruitandveg,
  "Desserts": q12dessert,
  "Meat": q12meat,
};

const imageMappings = {
  1: q1Images,
  2: q2Images,
  3: q3Images,
  4: q4Images,
  5: q5Images,
  6: q6Images,
  7: q7Images,
  8: q8Images,
  9: q9Images,
  10: q10Images,
  11: q11Images,
  12: q12Images,
};

const Survey = () => {
  const [step, setStep] = useState(1); 
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState(() => {
    const initialResponses = {};
    questions.forEach((q) => {
      initialResponses[q.id] = undefined;
    });
    return initialResponses;
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const q = questions[currentQuestion];

  const handleOptionChange = (value) => {
    setResponses((prev) => ({
      ...prev,
      [q.id]: value,
    }));
  };

  const handleSkip = () => {
    setResponses((prev) => ({
      ...prev,
      [q.id]: "Skipped",
    }));
    handleNext();
  };

  const handleNext = () => {
    const hasAnswered = responses[q.id] !== undefined;

    if (!hasAnswered && !q.canSkip) {
      setModalMessage("Please select an answer before proceeding.");
      setModalVisible(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasAnswered = responses[q.id] !== undefined;
    if (!hasAnswered && !q.canSkip) {
      setModalMessage("Please select an answer before submitting.");
      setModalVisible(true);
      return;
    }

    console.log("Survey Responses:", responses);
    alert(`Great job, ${name || "friend"}! You’re all done. Thank you so much for sharing with us. Please hand the tablet back to your interviewer.`);
  };

  return (
    <div>
      {modalVisible && (
        <Modal
          message={modalMessage}
          onClose={() => setModalVisible(false)}
        />
      )}

      {/* Step 1: Welcome Page */}
      {step === 1 && (
        <div className="intro-screen">
          <h1>HeartShare DD Annual Satisfaction Survey</h1>
          <p>Click below to continue</p>
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      )}

      {/* Step 2: Name Input Page */}
      {step === 2 && (
        <div className="name-screen">
          <h2>Hello! Nice to meet you! My name is Jane Doe. What's your name?</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name here"
          />
          <br />
          <button
            onClick={() => {
              if (name.trim()) {
                setStep(3);
              } else {
                alert("Please enter your name before continuing.");
              }
            }}
          >
            Next
          </button>
        </div>
      )}

      {/* Step 3: Actual Survey */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="survey-form">
          <div key={q.id} className="question-block">
            <label htmlFor={`q-${q.id}`}><strong>{q.text}</strong></label>
            <AudioButton audioSrc={q.audio} />

            <div className="options">
              {q.options.map((option) => (
                <label key={option} className="option-label" style={{ display: "block", textAlign: "center", marginBottom: "1rem" }}>
                  {imageMappings[q.id]?.[option] && (
                    <img
                      src={imageMappings[q.id][option]}
                      alt={option}
                      style={{ width: "100px", height: "100px", objectFit: "cover", marginBottom: "0.5rem" }}
                    />
                  )}
                  <div>
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={option}
                      checked={responses[q.id] === option}
                      onChange={() => handleOptionChange(option)}
                      style={{ marginRight: "0.5rem" }}
                    />
                    {option}
                  </div>
                </label>
              ))}
            </div>

            {q.canSkip && (
              <button type="button" onClick={handleSkip}>
                Skip this question
              </button>
            )}
          </div>

          <div className="nav-buttons">
            {currentQuestion > 0 && (
              <button type="button" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {currentQuestion < questions.length - 1 ? (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button type="submit">Submit Survey</button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default Survey;
