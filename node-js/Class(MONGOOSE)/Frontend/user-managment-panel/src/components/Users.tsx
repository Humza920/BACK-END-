"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type student = {
  _id: string;
  firstname: string;
  lastname: string;
  studentage: number;
  isPresentToday: boolean;
  studentemail: string;
  studentpass: string;
};

type studentsProps = {
  studentsarr: student[];
};

const students = ({ studentsarr }: studentsProps) => {
  const [students, setstudents] = useState<student[]>(studentsarr);
  const router = useRouter();

  async function deleteStudent(id: string) {
    console.log(id);
    await fetch(`http://localhost:4000/deleteone/${id}`, {
      method: "DELETE",
    });
    setstudents(students.filter((delstud) => delstud._id !== id));
    router.refresh();
  }

  // async function updatestudent(id:string) {
  //   console.log(id);
  //   await fetch(`http://localhost:4000/deleteone/${id}`,
  //     {
  //       method: "PATCH"
  //     }
  //   )
  // }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Student Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <div
              key={student._id}
              className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full transform hover:scale-105 transition-transform duration-300 border border-gray-200"
            >
              {/* Header with Avatar and Name (Click to open single user page) */}
              <Link href={`/singleuser/${student._id}`}>
                <div className="flex items-center space-x-4 mb-4 cursor-pointer group">
                  <div className="h-12 w-12 rounded-full ring-2 ring-offset-2 ring-blue-500 overflow-hidden flex-shrink-0">
                    <img
                      src="/user-placeholder.png"
                      alt={`${student.firstname} avatar`}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {student.firstname} {student.lastname}
                    </h2>
                    <p className="text-sm text-gray-500">{student.studentemail}</p>
                  </div>
                </div>
              </Link>

              {/* Divider */}
              <div className="my-4 border-t border-gray-200" />

              {/* Student Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Student ID</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {student._id.slice(0, 8)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Age</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {student.studentage}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Attendance</span>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.isPresentToday
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {student.isPresentToday ? "Present" : "Absent"}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex w-full flex-col sm:flex-row gap-3">
                <button
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 font-medium"
                  onClick={() => {
                    deleteStudent(student._id);
                  }}
                >
                  Eliminate student
                </button>
                <button
                  type="button"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
                >
                  <Link href={`/Updateuser/${student._id}`}>Update info</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default students;
