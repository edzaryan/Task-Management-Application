"use client";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCheckDouble, faClock, faStopwatch} from "@fortawesome/free-solid-svg-icons";
import IconDeleteAll from "@/components/icons/IconDeleteAll";


function MiniSidebar() {
    const pathname = usePathname();

    const navItems = [
        {
            icon: <FontAwesomeIcon icon={faCheckDouble} style={{ fontSize: "20px" }} />,
            title: "All",
            link: "/"
        },
        {
            icon: <FontAwesomeIcon icon={faCheck} style={{ fontSize: "20px" }} />,
            title: "Completed",
            link: "/completed"
        },
        {
            icon: <FontAwesomeIcon icon={faClock} style={{ fontSize: "20px" }} />,
            title: "Pending",
            link: "/pending"
        },
        {
            icon: <FontAwesomeIcon icon={faStopwatch} style={{ fontSize: "24px" }} />,
            title: "Overdue",
            link: "/overdue"
        }
    ];

    return (
        <div className="w-[80px] h-[100vh] grid justify-center content-start gap-20 py-4 bg-[#f9f9f9]">
            <div className="grid items-center justify-center w-[44px] h-[44px]">
                <Image src="/logo.svg" width={28} height={28} className="w-[40px] h-[40px]" alt="logo" />
            </div>
            <div className="grid gap-3">
                {navItems.map((item, index) => (
                    <div key={index} className={`${pathname === item.link && "border text-pink-600"} 
                        w-[44px] h-[44px] grid justify-center items-center rounded cursor-pointer group relative`}>
                        <Link href={item.link}>{item.icon}</Link>
                        <div className="u-triangle absolute top-[50%] translate-y-[-50%] left-12 text-xs pointer-events-none text-white
                            bg-pink-600 px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
            {/*<div className="mb-[1.5rem]">*/}
            {/*    <button className="w-12 h-12 flex justify-center items-center border-2 border-[#EB4E31] p-2 rounded-full">*/}
            {/*        <IconDeleteAll />*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    )
}

export default MiniSidebar;