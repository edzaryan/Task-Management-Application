"use client";
import { useUserContext } from "@/context/userContext";


interface MainContentLayoutProps {
    children: React.ReactNode;
}

function MainContentLayout({ children }: MainContentLayoutProps) {
    const { user } = useUserContext();

    return (
        <div className="grid grid-cols-[1fr_340px] h-[100vh]">
            {children}
        </div>
    )
}

export default MainContentLayout;