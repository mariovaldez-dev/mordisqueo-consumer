import { lazy, Suspense } from "react";
import { RouteObject } from "react-router";
import { Loading } from "./components/LoadingFallback";

const AppLayout = lazy(() => import("./layouts/shared/AppLayout"));
const BaseLayout = lazy(() => import("./layouts/shared/BaseLayout"));
const Booking = lazy(() => import("./features/booking/presentation/Booking"));
const LandingPage = lazy(() => import("./features/landing/LandingPage"));

const routes: RouteObject[] = [
    {
        path: "",
        element: (
            <Suspense fallback={<Loading />}>
                <BaseLayout />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: <LandingPage />,
            },
        ],
    },
    {
        path: "/booking",
        element: (
            <Suspense fallback={<Loading />}>
                <AppLayout />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: <Booking />,
            },
        ],
    },
];

export default routes;
