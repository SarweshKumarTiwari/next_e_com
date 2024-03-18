import Link from "next/link";
import Dropdown from "./dropdown";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between m-2 bg-gray-800 text-white">
        <div className="border border-gray-800 p-2">
            DNS Manager
        </div>
        <div className="flex items-center justify-between w-fit space-x-2 ">
            <Link href={'/signin'} className="p-2 border border-gray-800">
                login
            </Link>
            <Link href={'/signup'} className="p-2 border border-gray-800">
                signup
            </Link>
            <div className="p-2 z-20 border border-gray-800 relative group">
                <p>Dashboard</p>
                <Dropdown className="group-hover:mt-4"/>
            </div>
            <Link href={'/analytics'} className="p-2 border border-gray-800">
                Analytics
            </Link>
        </div>
    </div>
  )
}
