type Props = {
  params: {
    id: string;
  };
};

type User = {
        _id : string
        firstname : string
        lastname : string
        studentage : number
        isPresentToday : boolean
        studentemail : string
        studentpass : string
  }

const page = async ({ params }: Props) => {
    const {id} = await params
    const res : Response = await fetch(`http://localhost:4000/getsingleuser/${id}`, {
        method:"GET"
    })
    const user : User = await res.json()
    console.log(user);
    
  return (
  <>
  Hello {id}
  </>
  )
};

export default page;
