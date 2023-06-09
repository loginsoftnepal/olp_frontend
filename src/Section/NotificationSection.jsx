import React from 'react'
import ConnectionCard from '../newComponent/ConnectionCard/ConnectionCard'
import NotificationCard from '../newComponent/NotificaitonCard/NotificationCard';

function NotificationSection() {

  return (
    <div className='w-full min-h-screen bg-screen pt-[10vh]'>
     <div className='flex w-[80%] mx-auto flex-col my-3 rounded-xl'>
     <div className='px-2 border-b-2 border-[rgba(0, 0, 0, 0.6)] flex justify-between py-1' onClick={() => setShowRequests((prev) => !prev)}>
         <h2 className='text-lg font-bold text-[rgba(0, 0, 0, 0.6)] xl:text-xl mx-2 '>Notifications</h2>        
     </div>  
      <div className='w-full'>
         <NotificationCard />
          <NotificationCard />
           <NotificationCard />
            <NotificationCard />
      </div>

   </div>
   </div>
  )
}

export default NotificationSection;