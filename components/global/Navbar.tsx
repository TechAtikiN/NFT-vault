const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-10'>
      {/* logo */}
      <h1 className='text-2xl font-bold first-letter:text-red-500'>NFTVault</h1>

      {/* middle section  */}
      <div className='flex justify-evenly space-x-11 text-md'>
        <p className='nav-link'>Home</p>
        <p className='nav-link'>Explore</p>
        <p className='nav-link'>Contact Us</p>
      </div>

      {/* sign in */}
      <button className='sign-in'>Sign In</button>
    </div>
  )
}

export default Navbar
