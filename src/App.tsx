import { useRoutes } from "react-router";
import { useState, useEffect } from "react";
import "./App.css";
import router from "./router";
import { Loading } from "./components/LoadingFallback";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const content = useRoutes(router);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return <div className="bg-light text-dark">{content}</div>;
}

export default App;
