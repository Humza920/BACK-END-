export default function Home() {

 const getreq = async () => {
   const usersall = await fetch("http://localhost:4000/getallusers" , {
    method: "GET"
  })
  console.log(usersall);
  }
  getreq()
  return (
    <>
    </>
  );
}
