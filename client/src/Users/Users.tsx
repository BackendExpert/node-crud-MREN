import IonIcon from "@reacticons/ionicons"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users = () => {
    const [users, SetUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => SetUsers(result.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className="bg-blue-700 w-full h-screen">
        <div className="container mx-auto px-12 py-10">
            <div className="mx-10 py-12 bg-white rounded px-12">
                <p className="font-semibold text-2xl">Users</p>
                <Link to={'/Users/Create'} >
                    <div className="flex bg-green-600 duration-500 hover:bg-green-700 md:w-[15%] md:pl-8 py-2 rounded text-white">
                        <p className="text-md">Add User</p>
                        <p className="pl-2 py-[2px]"><IonIcon name="add"></IonIcon></p>
                    </div>
                </Link>
                <hr className="mt-2 mb-4" />
                <table className="table">
                    <thead>
                        <tr>
                            <th className="px-16">Name</th>
                            <th className="px-16">Email</th>
                            <th className="px-16">Age</th>
                            <th className="px-16">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td className="text-center">{user.age}</td>
                                        <td>
                                            <Link to={'/Users/Update'}><button className="px-6 text-white py-1 rounded bg-blue-400 duration-500 hover:bg-blue-600">Edit</button></Link>
                                            <button className="px-6 text-white py-1 rounded bg-red-500 ml-2 duration-500 hover:bg-red-700">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Users