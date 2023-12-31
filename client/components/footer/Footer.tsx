import {MailIcon} from '@heroicons/react/solid';
import { Brand } from '../Header';
export const Footer = () => {
  return (
    <div className="bg-[#0b1426] grid grid-cols-[.5fr_6px_1fr_1fr] items-center justify-center py-4 w-[100%] h-[300px] gap-2  ">
      <div className="flex items-center justify-center">

      </div>
      <div className="bg-pink-600 w-[3px] h-[100%]"></div>
      <div className="flex flex-col items-start justify-center self-start p-3">
        <h2 className="text-pink-600 text-xl">Contact</h2>
        <div className="p-5 flex flex-col items-start justify-center text-white">
          <div className='flex items-center py-2'>
            <MailIcon className='w-5 h-5' />
            <h5 className='px-2'><a target="_blank" href='mailto:njoyaalexander71@gmail.com'>blockExpert@gmail.com</a></h5>
          </div>
         
          <div className='flex items-center py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="#ffffff" width="50px" height="50px" className='w-5 h-5'>
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill="#ffffff"/>
            </svg>
            <h5 className='px-2'><a href="#" target="_blank">blockExpert</a></h5>
          </div>
         
        </div>
      </div>
     
    </div>
  )
} 
