"use client";
import {useUserContext} from "@/context/userContext";
import Sidebar from "@/components/Sidebar/Sidebar";

function SidebarProvider() {
    const { user } = useUserContext();

    return (
        <>
            {user && <Sidebar />}
        </>
    )
}

export default SidebarProvider;