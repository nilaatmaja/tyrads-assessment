import Sidebar from "../organisms/Sidebar/Sidebar";

type DashboardLayoutType = {
    children: React.ReactNode;
};

const DashboardLayout = (props: DashboardLayoutType) => {
    const { children } = props;
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 overflow-x-hidden overflow-y-auto bg-primaryBg">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
