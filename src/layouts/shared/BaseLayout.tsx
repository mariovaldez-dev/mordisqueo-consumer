import { FC, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import StickyHeader from "./StickyHeader";

interface BaseLayoutProps {
    children?: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return <div> <StickyHeader /> {children || <Outlet />}</div>;
};

export default BaseLayout;
