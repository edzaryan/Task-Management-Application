
interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="main-layout flex-1 bg-[#ededed] rounded-[1.5rem] rounded-8 overflow-auto">
            {children}
        </div>
    )
}

export default MainLayout;