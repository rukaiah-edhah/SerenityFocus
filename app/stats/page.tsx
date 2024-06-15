import _Stats from "@/components/Stats"
import Navbar from "@/components/Navbar/Navbar"
import UserAuth from "@/components/UserAuth"

export default function Stats(){
  return(
    <>
      <Navbar>
        <UserAuth />
      </Navbar>
      <main className="flex flex-col items-center justify-center mx-auto max-w-screen-xl mt-10 bg-base-100">
        <_Stats />
      </main>
    </>
  )
}