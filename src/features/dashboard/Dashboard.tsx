import ToggleTheme from "../../shared/components/buttons/ToggleTheme";
import Hero from "./hero";
import Navigation from "./navigation";

function Dashboard() {
    return (
        <div className="h-screen flex flex-col items-center justify-center font-epilogue transition-colors duration-300 dark:bg-zinc-800 bg-[hsl(0,0%,98%)]">
            <div className="flex w-full justify-end">
                <ToggleTheme />
            </div>
            <Navigation />
            <Hero />
        </div>
    );
}

export default Dashboard;
