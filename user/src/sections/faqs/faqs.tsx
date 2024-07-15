import React from 'react';
import Questions from '../../data/faq.json';

interface Questions {
    title: String,
    answer: String,
}

function Faqs() {
    const questions = Questions.questions

    return (
        <div className='bg-white m-16 mx-40 p-5 rounded-lg flex flex-col items-center justify-center shadow-md'>
            <div>
                <div className="text-center">
                    <h2 className="text-4xl leading-8 font-extrabold tracking-tight mb-6">Frequently Asked Questions</h2>
                    <p className="mx-20">Our design team helps clients achieve their marketing and business goals through user-friendly designs.</p>
                </div>
            </div>

            <div className="mt-10">
                <div>
                    {questions.map((questions: Questions) => (
                        <div>
                             <h3 className="text-2xl font-semibold">{questions.title}</h3>
                             <p className="mt-2">{questions.answer}</p>
                        </div>
                ))}
                </div>
            </div>

        </div>
    );
}

export default Faqs;
