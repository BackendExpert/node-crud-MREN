import IonIcon from "@reacticons/ionicons"
import { Link } from "react-router-dom"

const CreateUser = () => {
  return (
    <div className="bg-blue-600 w-full h-screen">
        <div className="container mx-auto py-10 px-12">
            <div className="bg-white py-4 px-12 rounded">
                <h1 className="text-xl font-semibold">Add New User</h1>
                <Link to={'/Users'}>
                    <div className="flex md:w-[10%] mt-4 py-2 md:pl-6 text-white rounded bg-blue-500 duration-500 hover:bg-blue-600">
                        <p className="pt-[2px]"><IonIcon name="arrow-back"></IonIcon></p>
                        <p className="pl-2">Back</p>
                    </div>
                </Link>

                <div className="">
                    <form>
                        <div className="">
                            <label htmlFor="">Name : </label><br />
                            <input type="text" className="border mt-2 h-10" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser