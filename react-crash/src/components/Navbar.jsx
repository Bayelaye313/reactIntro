import logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
           <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            <div className='flex flex-shrink-0 items-center mr-4' >
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </div>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <div className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>Home</div>
                <div className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>Jobs</div>
                <div className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>Add Jobs</div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar
