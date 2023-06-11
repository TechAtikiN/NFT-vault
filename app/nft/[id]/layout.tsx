// named exporta

// default exports
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
      <body
        className='bg-black text-white md:max-w-7xl mx-auto max-w-3xl'
      >
        {children}
      </body>
    </html>
  )
}
