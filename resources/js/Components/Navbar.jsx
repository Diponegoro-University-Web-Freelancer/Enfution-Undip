import { Link } from "@inertiajs/react";
import { useState } from "react";

const Navbar = ({ method = "get", active }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="w-full fixed z-50 bg-[#FFF9EE]">
            <div className="md:container">
                <div className="navbar justify-between">
                    <div className="">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link
                                        href="/"
                                        className={
                                            active === "home"
                                                ? "text-[#EB9928] justify-between"
                                                : "justify-between"
                                        }
                                        method={method}
                                        as="button"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li tabIndex={0}>
                                    <Link
                                        href={route("dbcc")}
                                        className={
                                            active === "dbcc"
                                                ? "text-[#EB9928] justify-between"
                                                : "justify-between"
                                        }
                                        method={method}
                                        as="button"
                                    >
                                        DBCC
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("national-seminar")}
                                        method={method}
                                        className={
                                            active === "national"
                                                ? "text-[#EB9928]"
                                                : ""
                                        }
                                        as="button"
                                    >
                                        National Seminar
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                        <img
                            className="w-12 cursor-pointer"
                            src="images/logoNav.png"
                            alt=""
                        />
                    </div>
                    <div className="">
                        <div className="hidden lg:flex mr-5">
                            <ul className="menu menu-horizontal px-1 font-semibold">
                                <li>
                                    <Link
                                        href={route("home")}
                                        className={
                                            active === "home"
                                                ? "text-[#EB9928]"
                                                : ""
                                        }
                                        method={method}
                                        as="button"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li tabIndex={0}>
                                    <Link
                                        href={route("dbcc")}
                                        className={
                                            active === "dbcc"
                                                ? "text-[#EB9928]"
                                                : ""
                                        }
                                        method={method}
                                        as="button"
                                    >
                                        DBCC
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("national-seminar")}
                                        method={method}
                                        className={
                                            active === "national"
                                                ? "text-[#EB9928]"
                                                : ""
                                        }
                                        as="button"
                                    >
                                        National Seminar
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <button
                            // onMouseOver={() => setIsHover(true)}
                            // onMouseLeave={() => setIsHover(false)}
                            onClick={() => {
                                setIsHover(!isHover);
                            }}
                        >
                            <p className=" py-1 text-[#FFCE2E] bg-[#1E2E40] rounded-full font-medium px-7 sm:px-11">
                                Register Now
                            </p>
                            <div
                                className={
                                    isHover
                                        ? "bg-[#FFCE2E] sm:px-5 rounded-xl py-2 absolute z-20 -bottom-14 sm:-bottom-16"
                                        : "hidden"
                                }
                            >
                                <Link href={route("national-seminar")}>
                                    <p className="text-center text-xs px-3">
                                        NATIONAL SEMINAR
                                    </p>
                                </Link>
                                <Link href={route("dbcc")}>
                                    <p className="text-center text-xs px-2">
                                        {" "}
                                        DIPONEGORO BUSINESS
                                        <br />
                                        CASE COMPETITION
                                    </p>
                                </Link>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
