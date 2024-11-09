// Import necessary components from external libraries
import { Container } from "react-bootstrap";      // Bootstrap container for responsive layout
import { Outlet} from 'react-router-dom'         // Outlet component for nested routing
import Header from "./components/Header";         // Custom Header component
import Footer from "./components/Footer";         // Custom Footer component

// Main App component definition
const App = () => {
  return (
    // Fragment (<>) to group multiple elements without adding extra DOM nodes
    <>
      {/* Header section of the application */}
      <Header />

      {/* Main content area with padding top and bottom (py-3) */}
      <main className="py-3">
        {/* Bootstrap container to contain and center content */}
        <Container>
          {/* Outlet renders child routes defined in router configuration */}
          <Outlet />
        </Container>
      </main>

      {/* Footer section of the application */}
      <Footer />
    </>
  );
};

// Export the App component to be used in other parts of the application
export default App;