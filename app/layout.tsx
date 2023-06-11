// named exporta
import { ThirdWebProvider } from './providers'

// default exports
import './globals.css'

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
    <html lang="en">
      <body>
        <ThirdWebProvider>
          {children}
        </ThirdWebProvider>
      </body>
    </html>
  )
}
