import Users from "@/components/Users"

export default async function Home() {  
  type User = {
        _id : string
        firstname : string
        lastname : string
        studentage : number
        isPresentToday : boolean
        studentemail : string
        studentpass : string
  }
   let res : Response = await fetch("http://localhost:4000/getallusers" , {
    method: "GET",
    cache: "no-store"
  })

  const users : User[] = await res.json()
  console.log(users);
  
  return (
    <>
    <Users studentsarr = {users}/>
    </>
  );
}

