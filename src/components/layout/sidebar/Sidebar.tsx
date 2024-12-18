import { FileText, GitBranch, Home, PenToolIcon as Tool } from "lucide-react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {

    // const [toggle, setToggle] = useState(false)

    return (

        // <div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
        <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute 
        inset-y-0 left-0 transform -translate-x-full md:re
        lative md:translate-x-0 transition duration-200 ease-in-out" >

            <div className="mb-6 px-8">Version Management</div>

            {/* <BiChevronLeft className={`${toggle ? "rotate-180" : ""} text-3xl transition-all duration-300`} /> */}

            <nav>
                <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <Home className="inline-block mr-2" size={20} />
                    Dashboard
                </Link>

                <Link to="/machines" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <Tool className="inline-block mr-2" size={20} />
                    Maquinas
                </Link>

                <Link to="/machines" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <FileText className="inline-block mr-2" size={20} />
                    Documentos
                </Link>

                <Link to="/machines" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
                    <GitBranch className="inline-block mr-2" size={20} />
                    Compatibilidade
                </Link>
            </nav>
        </div>
        // </div>


    )
}