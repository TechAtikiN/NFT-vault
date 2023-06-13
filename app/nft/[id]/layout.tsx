export const metadata = {
  title: 'NFTVault',
  description: 'NFTVault',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
