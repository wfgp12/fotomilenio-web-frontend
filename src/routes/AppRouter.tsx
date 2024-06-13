// Libraries
import { Navigate, Route, Routes } from "react-router-dom";
// Components
import { ProtectedDashboardRoutes, ProtectedRoutes, PublicRoutes } from ".";
// Pages
import {
  HomePage,
  LoginPage,
  NotFoundPage,
  HumanResourcePage,
  SchedulePage,
  PayrollPage,
  DashBoardPage,
  EventsPage,
} from "../pages";
// Assets-icons
import HomeIcon from "./../assets/icons/home-outline.svg";
import HumanResourceIcon from "./../assets/icons/human-resource.svg";

export const routes = [
  { path: "home", element: <HomePage />, label: "Home", icon: HomeIcon },
  {
    path: "human-resource",
    element: <HumanResourcePage />,
    label: "Recursos Humanos",
    icon: HumanResourceIcon,
    subRoutes: [
      { path: "", element: <DashBoardPage />, label: "DashBoard" },
      { path: "schedule", element: <SchedulePage />, label: "Horarios" },
      { path: "payroll", element: <PayrollPage />, label: "Nomina" },
      { path: "events", element: <EventsPage />, label:"Eventos" },
    ],
  },
];

const protectedRoutes = [
  {
    path: "",
    element: <Navigate to="/home" />,
    subRoutes: undefined,
    exact: true,
  },
  ...routes.map((route, index) => ({
    path: route.path,
    element: route.element,
    subRoutes: route.subRoutes,
    key: index,
  })),
];

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="" element={<Navigate to="/login" />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="" element={<ProtectedDashboardRoutes />}>
          {protectedRoutes.map((route, index) =>
            route.subRoutes ? (
              <Route key={index} path={route.path} element={route.element}>
                {route.subRoutes.map((subRoute, subIndex) => (
                  <Route
                    key={`${index}${subIndex}`}
                    path={subRoute.path}
                    element={subRoute.element}
                  />
                ))}
              </Route>
            ) : (
              <Route key={index} path={route.path} element={route.element} />
            )
          )}
        </Route>
      </Route>
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
  );
};
