import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"

const Users = () => {
  return (
    <div className="bg-blue-700 w-full h-screen">
        <div className="container mx-auto px-12 py-10">
            <div className="mx-10 py-12 bg-white rounded px-12">
                <p className="font-semibold text-2xl">Users</p>
                <Link to={'/Users/create'} >
                    <div className="flex bg-green-600 duration-500 hover:bg-green-700 md:w-[15%] md:pl-8 py-2 rounded text-white">
                        <p className="text-md">Add User</p>
                        <p className="pl-2 py-[2px]"><IonIcon name="add"></IonIcon></p>
                    </div>
                </Link>
                <hr className="mt-2 mb-4" />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users