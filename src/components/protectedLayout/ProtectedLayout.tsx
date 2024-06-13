// Actions
import { logoutAction } from "../../redux/slices/authSlice";
// Libraries
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// Store - Hooks
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
// Assets-icons
import LogOutIcon from "../../assets/icons/log-out-outline.svg";
import DownArrowIcon from "../../assets/icons/down-arrow.svg";
// Styles
import "./ProtectedLayout.scss";
import { routes } from "../../routes";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
    const user = useAppSelector((state) => state.auth.user);
    const [isOpenSubmenu, setIsOpenSubmenu] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(logoutAction());
    };

    const handleVisibilitySubMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault(); // Añadir esto previene cualquier comportamiento por defecto que pueda causar la recarga
        console.log("Button clicked!");
        setIsOpenSubmenu(!isOpenSubmenu);
    };

    return (
        <div className="protected-layout">
        <nav className="protected-layout__navBar">
            <div className="protected-layout__navBar__logo-container">
            <img
                src="https://fotomilenio.b-cdn.net/wp-content/uploads/2024/05/Logo-3.png"
                alt="logo fotomilenio"
            />
            </div>
            <ul className="protected-layout__navBar__menu">
            <li className="protected-layout__navBar__user">
                <span>{`${user?.name} ${user?.lastName}`}</span>
                <span className="subtitle">{user?.email}</span>
            </li>
            </ul>
        </nav>
        <div className="protected-layout__container">
            <div className="protected-layout__side-bar">
            <div className="protected-layout__side-bar__menu">
                {routes.map((route, index) => (
                <React.Fragment key={index}>
                    <NavLink
                    className={({ isActive }) =>
                        isActive
                        ? "protected-layout__side-bar__item protected-layout__side-bar__item--active"
                        : "protected-layout__side-bar__item"
                    }
                    to={route.path}
                    >
                        <img src={route.icon} alt="home-icons" />
                        <span>{route.label}</span>
                        {route.subRoutes && (
                            <button onClick={handleVisibilitySubMenu}>
                            <img src={DownArrowIcon} alt="arrow" className={isOpenSubmenu?"protected-layout__side-bar__item__arrow--open":"protected-layout__side-bar__item__arrow"}/>
                            </button>
                        )}
                    </NavLink>
                    {route.subRoutes && (
                    <div className={isOpenSubmenu?"protected-layout__side-bar__sub-menu--open":"protected-layout__side-bar__sub-menu"}>
                        {route.subRoutes
                            .filter(subRoute => subRoute.label.toLowerCase() !== 'dashboard')
                            .map((subRoute, si) => (
                                <NavLink
                                    key={`${index}${si}`}
                                    to={`${route.path}/${subRoute.path}`}
                                    className={({ isActive }) => isActive?"protected-layout__side-bar__subitem--active":"protected-layout__side-bar__subitem"}
                                >
                                    <span>{subRoute.label}</span>
                                </NavLink>
                        ))}
                    </div>
                    )}
                </React.Fragment>
                ))}
            </div>
            <div className="protected-layout__side-bar__menu">
                <button
                className="protected-layout__side-bar__item protected-layout__side-bar__log-out"
                onClick={handleLogOut}
                >
                <img src={LogOutIcon} alt="log-out-icon" />
                LOG OUT
                </button>
            </div>
            </div>
            <div className="protected-layout__content">{children}</div>
        </div>
        </div>
    );
};

export default ProtectedLayout;
