import Page from './components/page';
import Navbar from './components/Navbar';
import './styles.css';

// Main App component to route the landing page component
function App() {
  return (
    <div>
      <Navbar/>
      <Page />
    </div>
  );
}

export default App;