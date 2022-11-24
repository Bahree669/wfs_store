import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";

import Router from "./pages/Router";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Router />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
