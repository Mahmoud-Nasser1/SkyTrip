import React, { useState } from "react";
import Card from "./CardFedback";

const Feedback = () => {
  const [feedbackList, setFeedbackList] = useState([
    {
      name: "Sarah Johnson",
      initials: "SJ",
      image: "",
      feedback:
        "Amazing experience! The booking process was smooth and the flight was comfortable.",
    },
    {
      name: "Ali Mahmoud",
      initials: "AM",
      image: "",
      feedback:
        "Everything went perfectly! I’ll definitely book again for my next vacation.",
    },
    {
      name: "Lina Gomez",
      initials: "LG",
      image: "",
      feedback:
        "Great service and easy to use website. Highly recommended for frequent travelers!",
    },
  ]);

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gradient-sky/10 via-gradient-violet/10 to-gradient-peach/10">
      <h1 className="text-4xl text-center mb-5 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
        What Our Travelers Say
      </h1>
      <div className="flex flex-wrap gap-6 justify-center py-8 container m-auto ">
        {feedbackList.map(({ name, initials, image, feedback }, index) => (
          <Card
            key={index}
            name={name}
            initials={initials}
            image={image}
            feedback={feedback}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
