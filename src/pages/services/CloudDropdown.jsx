import PropTypes from "prop-types";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CloudDropdown = ({ title, content, isOpen, onClick }) => {
  return (
    <div>
      <button
        className={`items border-solid border-2 w-full p-4 flex justify-between ${
          isOpen ? "bg-red-600 text-white" : "bg-white text-black"
        } hover:bg-red-600 hover:text-white`}
        onClick={onClick}
      >
        <h2 className="cursor-pointer text-base font-bold">{title}</h2>
        <span className="plus-icon">
          {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isOpen && (
        <ul className="border-solid border-2 p-6 mb-2 list-disc">
          {content.map((item, index) => (
            <li key={index} className="answer bg-transparent ml-2 text-gray-600">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CloudDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloudDropdown;
