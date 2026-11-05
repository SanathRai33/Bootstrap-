import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default App;