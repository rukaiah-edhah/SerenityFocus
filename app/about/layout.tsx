export default function AboutLayout({
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