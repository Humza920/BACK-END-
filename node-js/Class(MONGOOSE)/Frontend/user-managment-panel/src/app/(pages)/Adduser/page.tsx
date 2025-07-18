"use client";

import { useState } from "react";

export default function Adduser() {
  const [firstname, setfirstname] = useState<string>("");
  const [lastname, setlastname] = useState<string>("");
  const [age, setage] = useState<number | undefined>(undefined);
  const [email, setemail] = useState<string>("");
  const [pass, setpass] = useState<string>("");
  const [isPresentToday, setisPresentToday] = useState<boolean>(false);

  async function postReq() {
    try {
      if (firstname && lastname && email && pass  !== "") {
        await fetch("http://localhost:4000/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          studentage: age,
          studentemail: email,
          isPresentToday,
          studentpass: pass,
        }),
      });
        console.log("STUDENT ADDED");
      }
      else(
        alert("FILL ALL THE FIELDS")
      )
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen text-black bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Add New Student
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setfirstname(e.target.value);
                  console.log(e.target.value);
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter first name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setlastname(e.target.value);
                  console.log(e.target.value);
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter last name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="studentage"
                className="block text-sm font-medium text-gray-700"
              >
                Age
              </label>
              <input
                type="number"
                id="studentage"
                name="studentage"
                value={age ?? ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setage(Number(e.target.value));
                  console.log(Number(e.target.value));
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter age"
                min="1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="studentemail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="studentemail"
                name="studentemail"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setemail(e.target.value);
                  console.log(e.target.value);
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="studentpass"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="studentpass"
                name="studentpass"
                value={pass}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setpass(e.target.value);
                  console.log(e.target.value);
                }}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isPresentToday"
                name="isPresentToday"
                checked={isPresentToday}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setisPresentToday(e.target.checked);
                  console.log(e.target.checked);
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="isPresentToday"
                className="ml-2 block text-sm text-gray-700"
              >
                Present Today
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={postReq}
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
