import Header from "./components/Header.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content"><ProfilePage /></main>
      <Footer />
    </div>
  );
}
export default App;
