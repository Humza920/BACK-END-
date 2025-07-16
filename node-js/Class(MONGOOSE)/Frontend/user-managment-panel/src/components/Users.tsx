
type User = {
    _id : string
     firstname : string
        lastname : string
        userage : number
        isVaccinated : boolean
        useremail : string
        userpass : string
  }

  type UsersProps = {
  usersarr: User[];
};

const Users = (
  {usersarr}:UsersProps
) => {
let  users = usersarr
return (
    <div className=" min-h-screen p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {usersarr.map((user) => (
        <div
          key={user._id}
          className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full transform hover:scale-105 transition-transform duration-300"
        >
          {/* Header with Avatar and Name */}
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {user.firstname[0]}{user.lastname[0]}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {user.firstname} {user.lastname}
              </h2>
              <p className="text-sm text-gray-500">{user.useremail}</p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200"></div>

          {/* User Details */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">User ID</span>
              <span className="text-sm font-semibold text-gray-900">{user._id}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Age</span>
              <span className="text-sm font-semibold text-gray-900">{user.userage}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Vaccination Status</span>
              <span className="text-sm font-semibold text-gray-900">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    user.isVaccinated ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {user.isVaccinated ? 'Vaccinated' : 'Not Vaccinated'}
                </span>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Password</span>
              <span className="text-sm font-semibold text-gray-900">••••••••</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium">
              Manage Profile
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users