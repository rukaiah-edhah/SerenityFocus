import HomePage from "@/components/HomePage"
import User from "@/components/User"
import Navbar from '@/components/Navbar'
import Logo from '@/components/Logo'
import UserAuth from '@/components/UserAuth'


export default function Home() {

  return (
    <>
      <Navbar>
        <UserAuth />
      </Navbar>
      <main data-theme="">
        <HomePage>
          <User />
        </HomePage>
      </main>
    </>
  )
}
