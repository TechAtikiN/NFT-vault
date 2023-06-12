'use client'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const Navbar = () => {

  const connectWithMetaMask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  console.log('address', address)

  return (
    <div>
      <nav className='flex justify-between items-center p-10'>
        {/* logo */}
        <h1 className='text-2xl font-bold first-letter:text-red-500'>NFTVault</h1>

        {/* middle section  */}
        <div className='flex justify-evenly space-x-11 text-md'>
          <p className='nav-link'>Home</p>
          <p className='nav-link'>Explore</p>
          <p className='nav-link'>Contact Us</p>
        </div>

        {/* sign in */}
        <button
          onClick={address ? () => { disconnect() } : () => { connectWithMetaMask() }}
          className='sign-in'
        >
          {address ? 'Sign Out' : 'Sign In'}
        </button>
      </nav>
      <p className='px-10 text-yellow-500 font-semibold'>You're logged in with wallet {address?.substring(0, 5)}...{address?.substring(address.length - 5)}</p>
    </div>
  )
}

export default Navbar
