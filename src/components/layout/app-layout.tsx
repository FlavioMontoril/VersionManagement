import { Outlet } from "react-router-dom"
import { Header } from "./header"
import { Sidebar } from "./sidebar/Sidebar"

export const AppLayout: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-hidden overflow-y-auto bg-gray-200">
                    <div className="container mx-auto px-4 py-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}