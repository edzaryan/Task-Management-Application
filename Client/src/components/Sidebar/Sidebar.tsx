"use client";
import Profile from "@/components/Profile/Profile";


function Sidebar() {
    return (
        <div className="w-[340px] p-5 fixed right-0 top-[80px] bottom-0">
            <Profile />
        </div>
    )
}

export default Sidebar;