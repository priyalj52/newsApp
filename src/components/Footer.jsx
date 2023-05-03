import React from 'react'

const Footer = () => {
  return (
    <div>
       
<footer class="p-4 bg-black rounded-lg shadow md:px-6 md:py-8 ">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
        <div className='text-white'>
                        <span className='bg-[#FBA627] p-1 rounded-sm'>Latest</span>
                        <span>News</span>
                  </div>
        </a>
        <ul class="flex  items-center justify-evenly mb-6 text-sm text-white sm:mb-0 ">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-8 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-8">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm  text-center text-white ">© 2023 LatestNews™. All Rights Reserved.
    </span>
</footer>

    </div>
  )
}

export default Footer

  