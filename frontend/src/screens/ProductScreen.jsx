// Import necessary hooks and components from react-router-dom
// useParams allows us to get URL parameters (like product ID from the URL)
import { useParams } from "react-router-dom";
// Link component is used to create navigation links between pages
import { Link } from "react-router-dom";

// Import various Bootstrap components for layout and styling
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

// Import our product data (assuming it's an array of products)
import products from "../products";

// Import our custom Rating component to display product ratings
import Rating from "../components/Rating";

// Create ProductScreen component - this shows individual product details
const ProductScreen = () => {
  // Get the product ID from the URL parameters
  // The syntax { id: productId } renames the 'id' parameter to 'productId'
  const { id: productId } = useParams();

  // Find the product in our products array that matches the URL parameter ID
  // .find() returns the first item that matches the condition
  const product = products.find((p) => p._id === productId);

  return (
    // Fragment (<>) to group multiple elements without adding extra DOM nodes
    <>
      {/* Back button that links to home page */}
      {/* my-3 adds margin top and bottom, btn-light makes it a light colored button */}
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      {/* Row component to create a horizontal group of columns */}
      <Row md={6}>
        {/* Column for product image - takes up 5 columns on medium screens */}
        <Col md={5}>
          {/* Responsive image that fills its container */}
          <Image src={product.image} alt={product.image} fluid />
        </Col>

        {/* Column for product details - takes up 4 columns on medium screens */}
        <Col md={4}>
          {/* ListGroup for showing product information in a list format */}
          {/* variant="flush" removes outer borders and rounded corners */}
          <ListGroup variant="flush">
            {/* Product name */}
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            {/* Product rating - uses our custom Rating component */}
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>

            {/* Product price */}
            <ListGroup.Item>Price: {product.price*4} Lei </ListGroup.Item>

            {/* Product description */}
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Column for price and add to cart - takes up 3 columns on medium screens */}
        <Col md={3}>
          {/* Card component to group related content */}
          <Card>
            <ListGroup variant="flush">
              {/* Price information */}
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>{product.price*4} Lei</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Stock status */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {/* Ternary operator to show stock status */}
                      {product.countInStock > 0 ? "In stock " : "Out of stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              {/* Add to cart button */}
              <ListGroup.Item>
                <Button
                  className="btn-block" // Makes button full width
                  type="button"
                  // Button is disabled if product is out of stock
                  disabled={product.countInStock === 0}
                >
                  Add to cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

// Export the component to use in other files
export default ProductScreen;

/*
This component creates a product detail page with:
1. A back button to return to the home page
2. Product image on the left
3. Product details in the middle (name, rating, price, description)
4. A card on the right showing price, stock status, and add to cart button

The layout is responsive:
- md={5} means take up 5 columns out of 12 on medium and larger screens
- On smaller screens, columns will stack vertically

Bootstrap classes used:
- btn: Creates a button style
- btn-light: Makes the button light colored
- my-3: Adds margin top and bottom (spacing)
- btn-block: Makes button full width
- fluid: Makes image responsive

The component uses URL parameters to know which product to display,
and finds that product's data from the products array.
*/