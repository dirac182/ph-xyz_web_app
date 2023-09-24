import Navbar from "./components/Navbar";
import Route from "./components/Route";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Faq from "./pages/Faq";
import DemoSetup from "./pages/DemoSetup"
import Footer from "./components/Footer";


function App() {
    return(
        <div className="font-sans ">
            <Navbar />
            <Route path="/">
                <Landing/>
            </Route>
            <Route path="/demo">
                <DemoSetup/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/faq">
                <Faq />
            </Route>
            <div>
                <Footer />
            </div>
        </div>
    )
};

export default App;