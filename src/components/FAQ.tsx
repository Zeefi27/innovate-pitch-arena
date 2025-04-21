import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Who can participate in Ideathon 2.0?",
    answer: "Ideathon 2.0 is open to all students. Teams must consist of 2-4 members."
  },
  {
    question: "Is there any registration fee?",
    answer: "Initial registration is free for all teams. Only the top 20 teams selected for the final round will need to pay Rs. 250 per team."
  },
  {
    question: "How are teams selected for the final round?",
    answer: "From the 80 registered teams, a filtration round will be conducted to select the top 20 teams based on their presentation, communication, and idea quality."
  },
  {
    question: "What should I prepare for the preliminary pitch?",
    answer: "Prepare a brief 3-4 minute presentation highlighting your idea's innovation, technical stack, and implementation plan. Focus on clarity and communication."
  },
  {
    question: "What's the format of the final round?",
    answer: "The final round consists of a 5-7 minute pitch followed by a 2-3 minute Q&A session with the judges. You'll present to a panel of experts in the Seminar Hall/Auditorium."
  },
  {
    question: "Will certificates be provided to all participants?",
    answer: "Yes, all participants will receive participation certificates. Finalists and winners will receive special certificates and prizes as per their achievements."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-gray-50 fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 heading-font">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Find answers to common questions about Ideathon 2.0
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-5 border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md glass"
            >
              <button
                className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg heading-font ${
                  activeIndex === index ? "bg-purple-50 text-purple-800" : "text-gray-900"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? "transform rotate-180 text-purple-600" : "text-gray-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all ${
                  activeIndex === index ? "max-h-96 p-5 bg-white" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
