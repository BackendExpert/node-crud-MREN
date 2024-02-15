import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"

const Users = () => {
  return (
    <div className="bg-blue-700 w-full h-screen">
        <div className="container mx-auto px-12 py-10">
            <div className="mx-10 py-12 bg-white rounded px-12">
                <p className="font-semibold text-2xl">Users</p>
                <hr className="pb-10" />
                <Link to={'/Users/create'} >
                    <div className="flex">
                        <p className="text-md">Add User</p>
                        <p className="pl-2 py-[2px]"><IonIcon name="add"></IonIcon></p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Users