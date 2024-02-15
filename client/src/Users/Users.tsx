import { Link } from "react-router-dom"

const Users = () => {
  return (
    <div className="bg-blue-700 w-full h-screen">
        <div className="container mx-auto px-12 py-10">
            <div className="mx-10 py-12 bg-white rounded px-12">
                <p className="font-semibold text-2xl">Users</p>
                <hr className="pb-10" />
                <Link to={'/Users/create'} >
                    
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Users