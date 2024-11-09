// Import necessary components from libraries
import { Card } from "react-bootstrap";          // Card component from React Bootstrap for creating card layouts
import { Link } from "react-router-dom";         // Link component for navigation between pages
import Rating from "./Rating";                   // Custom Rating component (imported from local files)

// Define Product component that accepts a 'product' prop
const Product = ({ product }) => {
  return (
    // Create a Card with margin on y-axis (my-3), padding (p-3) and rounded corners
    <Card className="my-3 p-3 rounded">
      {/* Link to individual product page using product ID */}
      <Link to={`/product/${product._id}`}>
        {/* Display product image at the top of the card */}
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        {/* Another link to product page with product name */}
        <Link href={`/product/${product}`}>
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* Display rating component with product rating and number of reviews */}
        <Card.Text as='div'>
            <Rating 
              value={product.rating} 
              text={`${product.numReviews} reviews`} 
            />
        </Card.Text>

        {/* Display product price (multiplied by 4) in Lei currency */}
        <Card.Text as="h3">{product.price * 4} Lei</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Export the component to be used in other files
export default Product;

