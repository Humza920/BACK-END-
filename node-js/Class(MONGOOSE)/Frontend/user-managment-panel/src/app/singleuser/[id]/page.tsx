type Props = {
  params: {
    id: string;
  };
};

type User = {
  _id: string;
  firstname: string;
  lastname: string;
  studentage: number;
  isPresentToday: boolean;
  studentemail: string;
  studentpass: string;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const res: Response = await fetch(
    `http://localhost:4000/getsingleuser/${id}`,
    {
      method: "GET",
    }
  );
  const user: User = await res.json();
  console.log(user);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {user.firstname} Profile
        </h1>

        {/* Placeholder Avatar */}
        <div className="w-full flex items-center justify-center mt-4 mb-8">
          <img
            src="/user-placeholder.png"
            alt="User avatar"
            className="w-24 h-24 rounded-full ring-2 ring-offset-2 ring-blue-500 object-cover"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">First Name:</span>
            <span className="text-gray-800">{user.firstname}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Last Name:</span>
            <span className="text-gray-800">{user.lastname}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Age:</span>
            <span className="text-gray-800">{user.studentage}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Email:</span>
            <span className="text-gray-800 break-words text-right max-w-[60%]">
              {user.studentemail}
            </span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-600 font-medium">Present Today:</span>
            <span
              className={`px-2 py-1 rounded-full text-sm font-semibold ${
                user.isPresentToday
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {user.isPresentToday ? "Yes" : "No"}
            </span>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default page;
