import { Outlet } from "react-router";
import StickyHeader from "./StickyHeader";

const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-[hsl(0,0%,98%)] dark:bg-zinc-800 transition-colors duration-300">
            <StickyHeader />
            <main className="w-full flex-1 pt-16">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
