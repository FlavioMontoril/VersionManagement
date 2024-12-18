import { Bell, User } from "lucide-react"

export const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="mx-auto py-4 px-10 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">Sistema de Documentação Técnica</h1>
                    <div className="flex items-center">
                        <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <Bell size={20} />
                        </button>

                        <button className="ml-3 p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <User size={20} />
                        </button>
                    </div>

                </div>

            </div>
        </header>
    )
}