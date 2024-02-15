import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"

const CreateUser = () => {
  return (
    <div className="bg-blue-600 w-full h-screen">
        <div className="container mx-auto py-10 px-12">
            <div className="bg-white py-4 px-12 rounded">
                <h1 className="text-xl font-semibold">Update User</h1>
                <Link to={'/Users'}>
                    <div className="flex md:w-[10%] mt-4 py-2 md:pl-6 text-white rounded bg-blue-500 duration-500 hover:bg-blue-600">
                        <p className="pt-[2px]"><IonIcon name="arrow-back"></IonIcon></p>
                        <p className="pl-2">Back</p>
                    </div>
                </Link>

                <div className="py-4">
                    <form>
                        <div className="">
                            <label htmlFor="">Name : </label><br />
                            <input type="text" className="border rounded  border-gray-200 w-full mt-2 h-10 pl-2" />
                        </div>
                        <div className="">
                            <label htmlFor="">Email : </label><br />
                            <input type="email" className="border rounded  border-gray-200 w-full mt-2 h-10 pl-2" />
                        </div>
                        <div className="">
                            <label htmlFor="">Age : </label><br />
                            <input type="number" className="border rounded  border-gray-200 w-full mt-2 h-10 pl-2" />
                        </div>
                        <div className="mt-4">
                            <button className="bg-blue-500 px-12 py-2 text-white rounded duration-500 hover:bg-blue-600">Update User</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser