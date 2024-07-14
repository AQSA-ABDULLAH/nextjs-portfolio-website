// src/sections/faqs/faqs.tsx

// @ts-nocheck
// @ts-ignore
import { useClient } from 'next/client'; // Import useClient from next/client
import { useState, useEffect } from 'react'; // Import useState and useEffect from react

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null); // Use useState directly

    useEffect(() => {
        setActiveIndex(null); // Reset activeIndex on component mount
    }, []);

    const toggleQuestion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questions = [
        {
            title: "What is your design process?",
            answer: "Our design process starts with understanding the client's goals and requirements...",
        },
        {
            title: "How long does a project take?",
            answer: "The duration of a project depends on its complexity and scope. On average, it takes about 4-6 weeks",
        },
        {
            title: "What are your rates?",
            answer: "Our rates are competitive and depend on the project's complexity. Please contact us for a detailed quote...",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-12 bg-white rounded-lg shadow-md mx-20 my-16">
            <div className="relative mb-8">
                <div className="absolute w-3 h-3 bg-black rounded-full top-0 -mt-1"></div>
                <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
            </div>
            <p className="text-sm text-gray-600 mb-8 max-w-3xl text-center">
                Our design team helps clients achieve their marketing and business goals through user-friendly designs.
            </p>

            {questions.map((question, index) => (
                <div key={index} className="border border-gray-300 rounded-md shadow-md mb-6">
                    <div
                        className="flex justify-between items-center bg-white p-4 cursor-pointer"
                        onClick={() => toggleQuestion(index)}
                    >
                        <h2 className="text-base font-medium">{question.title}</h2>
                        <span className="text-xs">{activeIndex === index ? '▲' : '▼'}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="bg-gray-100 p-4">
                            <p className="text-sm text-gray-700">{question.answer}</p>
                        </div>
                    )}
                </div>
            ))}

            <button className="bg-black text-white py-4 px-8 rounded-full text-base font-medium flex items-center">
                Contact Me <span className="ml-2 text-gray-300">~ it's free</span>
            </button>
        </div>
    );
};

export default FAQ;



