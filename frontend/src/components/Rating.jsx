// Import star icons from Font Awesome 
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

// Create Rating component that takes two props:
// value: a number between 0-5 representing the rating (can have decimals like 4.5)
// text: optional text to show next to stars (like "123 reviews")
const Rating = ({ value, text }) => {
    return (
      // Main container with 'rating' class for styling
      <div className="rating">
        {/* Create an array [1,2,3,4,5] and map through each number */}
        {/* .map() runs a function for each item in the array */}
        {[1, 2, 3, 4, 5].map((index) => (
          // For each number, create a span element
          // key={index} is required by React when mapping elements
          <span key={index}>
            {/* This is a nested ternary operator (like multiple if/else statements)
                It decides which star icon to show based on the rating value */}
            {
              // First condition: Is value >= current index?
              // Example: if value is 4.5 and index is 4, show full star
              value >= index ? (
                // If true, show a full star
                <FaStar />
              ) : 
              // Second condition: Is value >= index - 0.5?
              // Example: if value is 4.5 and index is 5, show half star
              value >= index - 0.5 ? (
                // If true, show a half star
                <FaStarHalfAlt />
              ) : (
                // If both conditions are false, show empty star
                <FaRegStar />
              )
            }
          </span>
        ))}
        {/* Show the text (or empty string if no text provided) */}
        {/* The || operator means: use text if it exists, otherwise use empty string */}
        <span className="rating-text">{text || ''}</span>
      </div>
    )
  }
  
  // Export the component to use it in other files
  export default Rating
  
  /* 
  Example Usage:
  <Rating value={4.5} text="123 reviews" />
  
  How it works step by step:
  1. If value is 4.5:
     - First star (index=1): 4.5 >= 1 = true → Full star
     - Second star (index=2): 4.5 >= 2 = true → Full star
     - Third star (index=3): 4.5 >= 3 = true → Full star
     - Fourth star (index=4): 4.5 >= 4 = true → Full star
     - Fifth star (index=5): 4.5 >= 5 = false, but 4.5 >= 4.5 = true → Half star
*/  