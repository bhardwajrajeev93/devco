'use client'
import React, { useState } from 'react';

export default function Faq() {
  // React state to keep track of which item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Array of FAQs to dynamically render
  const faqs = [
    {
      question: "What is Software Development?",
      answer: "Why are we working here, man?"
    },
    {
      question: "How Do You Choose the Best Software Development Company?",
      answer: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file."
    },
    {
      question: "What is Agile Software Development?",
      answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product."
    },
    {
      question: "How Much Do Your Custom Software Engineering Services Cost?",
      answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product."
    },
    {
      question: "What Are the Benefits of Custom Software Development?",
      answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product."
    },
    {
      question: "How Long Does it Take to Create and Build Custom Software?",
      answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product."
    },
   
    
  ];

  // Function to handle clicking the accordion item
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same item is clicked
    } else {
      setActiveIndex(index); // Open the clicked item
    }
  };

  return (
    <div className="bg-black w-full"> 
      <div className="container mx-auto p-4"> 
        <div className="flex " > 
            <h1 className="text-white text-5xl mb-4 "> Frequently Asked Questions</h1>
            <p>Here are some of the most common questions regarding our software dev services </p>

        </div>
        <div id="accordion-collapse" className="bg-black rounded-lg shadow-lg"> {/* Added rounded corners and shadow */}
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-white gap-3 bg-black" // Button background
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-3 h-3 ${activeIndex === index ? 'rotate-180' : ''} shrink-0`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5L5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-collapse-body-${index}`}
                className={`${activeIndex === index ? '' : 'hidden'} p-5 `}
              >
                <p className="mb-2 text-gray-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
