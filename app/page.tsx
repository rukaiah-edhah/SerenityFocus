import HomePage from "@/components/HomePage"
import User from "@/components/User"

export default function Home({children}: {children: React.ReactNode}) {

  return (
    <main data-theme="">
      <HomePage>
        <User />
      </HomePage>
    </main>
  )
}
