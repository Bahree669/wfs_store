import { BrowserRouter } from "react-router-dom";
import { Header } from "./components";

import Router from "./pages/Router";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
};

export default App;
