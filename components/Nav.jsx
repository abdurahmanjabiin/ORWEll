import Hero from "./Hero";
import Link from "next/link";

function Nav() {
  return (
    <>
      <div className="navbar bg-base-100 rounded-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="services">Service</Link>
              </li>
              <li>
                <Link href="/contect">Contect</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">ORWEll</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link href="services">Service</Link>
            </li>
            <li>
              <Link href="/contect">Contect</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
