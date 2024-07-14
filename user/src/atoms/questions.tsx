import PropTypes from "prop-types";

const Questions = ({ questions }) => {
  return (
    <div className="mt-8 w-full">
      {questions.map((question, index) => (
        <div key={index} className="border border-gray-300 rounded-md shadow-md mb-6">
          <div className="flex justify-between items-center bg-white p-4 cursor-pointer">
            <h2 className="text-base font-medium">{question.title}</h2>
          </div>
          <div className="bg-gray-100 p-4">
            <p className="text-sm text-gray-700">{question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Questions.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Questions;

