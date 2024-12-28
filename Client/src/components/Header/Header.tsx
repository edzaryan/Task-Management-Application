"use client";
import {useUserContext} from "@/context/userContext";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {faMoon, faUser} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { user } = useUserContext();

    return (
        <div className="grid grid-flow-col justify-between items-center px-6 py-4 w-full">
            <div>
                <div>
                    <span role="img" aria-label="wave">👋</span>&nbsp;{user ? `Welcome, ${user.name}` : "Welcome to Taskfyer"}
                </div>
                <div>
                    {user
                        ? <>You have <span className="font-bond text-[#3aafae]">5</span>&nbsp; active tasks</>
                        : <>Please login or register to view your tasks</>
                    }
                </div>
            </div>
            <div className="grid items-center grid-flow-col gap-20">
                <button className="px-4 py-2 bg-[#3aafae] text-white rounded-[50px] hover:bg-[#2fbcae] duration-200">Create task</button>
                <div className="grid grid-flow-col gap-3">
                    <Link
                        href="https://github.com"
                        className="w-10 h-10 rounded-full grid items-center justify-center border-2 border-[#e6e6e6]"
                        target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="text-[20px] text-pink-600" />
                    </Link>
                    <Link
                        href="https://github.com"
                        className="w-10 h-10 rounded-full grid items-center justify-center border-2 border-[#e6e6e6]"
                        target="_blank">
                        <FontAwesomeIcon icon={faMoon} className="text-[20px] text-pink-600" />
                    </Link>
                    <Link
                        href="https://github.com"
                        className="w-10 h-10 rounded-full grid items-center justify-center border-2 border-[#e6e6e6]"
                        target="_blank">
                        <FontAwesomeIcon icon={faUser} className="text-[20px] text-pink-600" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;