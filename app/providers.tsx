'use client'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
export function ThirdWebProvider({ children }: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider activeChain={ChainId.Goerli}>
      {children}
    </ThirdwebProvider>
  )
}