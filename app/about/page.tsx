import _About from "@/components/About"
import Navbar from "@/components/Navbar/Navbar"
import UserAuth from "@/components/UserAuth"

export default function About(){
  return(
    <>
      <Navbar>
        <UserAuth />
      </Navbar>
      <main className="flex flex-col items-center justify-center mx-auto max-w-screen-md mt-10 bg-base-100">
        <_About />
      </main>
    </>
  )
}