// Import components from react-bootstrap that we need for the navigation bar
// Navbar: Creates the main navigation bar
// Nav: Creates the navigation menu items
// Container: Keeps content centered and responsive
import { Navbar, Nav, Container } from "react-bootstrap";

// Import icons from react-icons/fa (Font Awesome icons)
// FaShoppingCart: Shopping cart icon for the cart link
// FaUser: User icon for the sign in link
import { FaShoppingCart, FaUser } from "react-icons/fa";

// Import LinkContainer which allows us to use React Router with Bootstrap components
// It wraps Bootstrap components to make them work with React Router navigation
import { LinkContainer } from "react-router-bootstrap";

// Import the website logo from the assets folder
// The '../' means go up one folder level, then into the assets folder
import logo from "../assets/logo.png";

// Create the Header component that will be at the top of every page
const Header = () => {
  return (
    <header>
      {/* Main navigation bar
          bg="dark": Sets a dark background
          variant="dark": Sets text color to light for dark background
          expand="md": Menu will expand on medium screens and larger
          collapseOnSelect: Menu will collapse after clicking a link on mobile */}
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        {/* Container keeps content centered and provides proper spacing
            bg="light" and variant="light" set the container background and text color */}
        <Container bg="light" variant="light">
          {/* LinkContainer wraps the brand logo/text to make it a link to home page ('/')
              This is like an <a> tag but works with React Router */}
          <LinkContainer to="/">
            <Navbar.Brand>
              {/* Website logo with a height of 45px and alt text for accessibility */}
              <img src={logo} height={"45px"} alt="KaraShop Logo" />
              KaraShop
            </Navbar.Brand>
          </LinkContainer>

          {/* Toggle button for mobile view (hamburger menu)
              This button shows up when the screen size is smaller than 'md'
              aria-controls helps with accessibility */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* This is the content that gets collapsed on mobile devices
              It contains all the navigation links */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav component to hold navigation links
                ms-auto pushes the nav items to the right side of the navbar
                (ms means margin-start, auto means as much as possible) */}
            <Nav className="ms-auto">
              {/* Cart link - wrapped in LinkContainer to work with React Router
                  This will navigate to /cart when clicked */}
              <LinkContainer to="/cart">
                <Nav.Link>
                  {/* Shopping cart icon followed by the text "Cart" */}
                  <FaShoppingCart />
                  Cart
                </Nav.Link>
              </LinkContainer>

              {/* Sign in link - wrapped in LinkContainer to work with React Router
                  This will navigate to /login when clicked */}
              <LinkContainer to="/login">
                <Nav.Link>
                  {/* User icon followed by the text "Sign in" */}
                  <FaUser />
                  Sign in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

// Export the Header component so it can be imported and used in other files
// This makes the component reusable throughout the application
export default Header;