"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

type User = {
  _id: string;
  firstname: string;
  lastname: string;
  studentage: number;
  isPresentToday: boolean;
  studentemail: string;
  studentpass: string;
};

const Updateuser = () => {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  // States for form fields
  const [firstname, setfirstname] = useState<string>("");
  const [lastname, setlastname] = useState<string>("");
  const [age, setage] = useState<number>(0);
  const [isPresentToday, setisPresentToday] = useState<boolean>(false);

  // Fetch user data on page load
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`http://localhost:4000/getsingleuser/${id}`, {
        method: "GET",
      });
      const user: User = await res.json();
      console.log(user);

      // Set form fields
      setfirstname(user.firstname);
      setlastname(user.lastname);
      setage(user.studentage);
      setisPresentToday(user.isPresentToday);
    }
    fetchUser();
  }, [id]);

  // Update user API call
  async function update(e: React.FormEvent) {
    e.preventDefault();
    await fetch(`http://localhost:4000/updateuserinfo/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname,
        lastname,
        studentage: age,
        isPresentToday,
      }),
    });
    router.push("/"); // Redirect back to dashboard
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-black bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Student
        </h2>
        <form onSubmit={update} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setfirstname(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setlastname(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              value={age || ""}
              onChange={(e) => setage(Number(e.target.value))}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isPresentToday}
              onChange={(e) => setisPresentToday(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label className="ml-2 text-sm text-gray-700">Present Today</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updateuser;
