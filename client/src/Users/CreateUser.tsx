import IonIcon from "@reacticons/ionicons"

const CreateUser = () => {
  return (
    <div className="bg-blue-600 w-full h-screen">
        <div className="container mx-auto py-10 px-12">
            <div className="bg-white py-4 px-12 rounded">
                <h1 className="text-xl font-semibold">Add New User</h1>
                <div className="flex w-[15%]">
                    <p className="">Back</p>
                    <p className=""><IonIcon name="arrow-back"></IonIcon></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateUser