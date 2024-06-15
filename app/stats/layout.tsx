export default function StatsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main data-theme="">
        {children}
      </main>
    </>
  )
}