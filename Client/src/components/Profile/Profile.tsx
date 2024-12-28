import { useUserContext } from "@/context/userContext";
import Image from "next/image";
import RadialChart from "@/components/RadialChart/RadialChart";


function Profile() {
    const { user } = useUserContext();

    return (
        <div className="grid gap-1">
            <div className="px-2 py-4 grid grid-cols-[auto_1fr] items-center gap-3 bg-[#e6e6e6]/20 rounded-[0.8rem]
            hover:bg-[#e6e6e6]/50 transition duration-300 ease-in-out cursor-pointer border-gray-200 border border-transparent">
                <div>
                    {user.photo
                        ? <Image src={user.photo} width={70} height={70} className="rounded-full" alt="avatar"
                                 priority={true}/>
                        : (
                            <div
                                className="rounded-full w-[70px] h-[70px] bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-600"></span>
                            </div>
                        )
                    }
                </div>
                <div>
                    <div className="font-medium">Hello,</div>
                    <div className="font-bold">{user?.name}</div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-2 py-4">
                <div className="grid gap-1">
                    <div className="text-gray-400">Total Tasks</div>
                    <div className="grid items-center grid-cols-[auto_1fr] gap-3">
                        <div className="w-[5px] h-[40px] bg-purple-600 rounded-full"/>
                        <div className="text-3xl">10</div>
                    </div>
                </div>
                <div className="grid gap-1">
                    <div className="text-gray-400">In Progress</div>
                    <div className="grid items-center grid-cols-[auto_1fr] gap-3">
                        <div className="w-[5px] h-[40px] bg-[#3aafae] rounded-full"/>
                        <div className="text-3xl">10</div>
                    </div>
                </div>
                <div className="grid gap-1">
                    <div className="text-gray-400">Open Tasks</div>
                    <div className="grid items-center grid-cols-[auto_1fr] gap-3">
                        <div className="w-[5px] h-[40px] bg-yellow-400 rounded-full"/>
                        <div className="text-3xl">25</div>
                    </div>
                </div>
                <div className="grid gap-1">
                    <div className="text-gray-400">Completed</div>
                    <div className="grid items-center grid-cols-[auto_1fr] gap-3">
                        <div className="w-[5px] h-[40px] bg-pink-600 rounded-full"/>
                        <div className="text-3xl">200</div>
                    </div>
                </div>
            </div>
            <div className="grid gap-2 text-gray-400">
                <div>Activity</div>
                <RadialChart/>
            </div>
            <div>
                <button className="border p-2 w-[100%] rounded-full bg-[#e6e6e6]/20 hover:bg-[#e6e6e6]/40
                transition duration-300 ease-in-out cursor-pointer">Sign Out</button>
            </div>
        </div>
    );
}

export default Profile;
