import React, { useState } from 'react'
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { BsArrowLeftCircle,BsSearch,BsFillImageFill, BsPeople} from "react-icons/bs";
import { HiOutlineMenu  } from "react-icons/hi";
import { RiDashboardFill,RiMessage2Line} from "react-icons/ri";
import { AiOutlineFileText ,AiOutlineBarChart} from "react-icons/ai";
import { GoUnread ,GoFileMedia} from "react-icons/go";
import {FiSettings } from "react-icons/fi";
import { FcSettings} from "react-icons/fc";
import { BiLogOut} from "react-icons/bi";
import { IoMdNotificationsOutline} from "react-icons/io";
import { MdAccountCircle} from "react-icons/md";
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/userSlice';
import { Link } from 'react-router-dom';

 function DashBoard() {
    const [open,setOpen]=useState(true);
    const user = useSelector(selectUser)
    const Menus = [
        {title:"Dashboard"},
        {title:"Pages",icon:<AiOutlineFileText/>,path:""},
        {title:"Projects", icon:<BsFillImageFill/>,path:""},
        {title:"Analytics",spacing:true,icon:<AiOutlineBarChart/>,path:""},
        {title:"Inbox",icon:<RiMessage2Line/>,path:""},
        {title:"Media",icon:<GoFileMedia/>,path:""},
        {title:"Profile" , spacing:true,icon:<BsPeople/>,path:""},
        {title:"Setting",icon:<FiSettings />,path:""},
        {title:"Logout",icon:<BiLogOut/>,path:"login"},

    ]
  return (
    // <div className='flex flex-row space-x-10 justify-end bg-white p-5'>
        
        
    //     <button className='flex gap-2  p-2 w-24 hover:bg-white hover:text-black bg-slate-700 text-white rounded-sm '>
    //         <FaHome className='mt-1'/>Home
    //         </button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:font-serif hover:bg-white hover:text-black'>About</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Academics</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Admission</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>DashBoard</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Courses</button>
    //     <button className='p-2 bg-slate-700 text-white rounded-sm hover:bg-white hover:text-black'>Login</button>
        
    // </div>
    <div className='flex'>    
        <div className={`flex flex-col  bg-white rounded-xl space-y-10 shadow-black h-screen ${open ? "w-64" : "w-20"}  transition-width duration-300 relative`}  >
        <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 h-screen p-5 space-y-3'>
            {/* <p className='font-serif font-bold text-2xl'>Admin Dashboard</p> */}
            <BsArrowLeftCircle className={`text-blue-400 rounded-full bg-white text-3xl absolute -right-3  top-15 cursor-pointer ${!open && "rotate-180"}`}onClick={()=>setOpen(!open)}/>
        <div className='inline-flex  '>
            <HiOutlineMenu className={`pt-2 cursor-pointer block float-left mr-2 text-white text-3xl  duration-500 ${!open && "rotate-[360deg]"}`}/> 
            <p className={`text-white text-3xl duration-300 ${!open && "scale-0"}`}>Menu</p>
        </div>
        <div className='flex bg-light-white items-center rounded-md px-3 py-2'>
            <BsSearch className={` text-white text-lg block float-left cursor-pointer  ${open ? "mr-2":""}`}/>
            <input type={'search'} id="search" placeholder="search" className={`placeholder:text-2xl  focus:outline-none w-full text-white bg-blue-900 ${!open && "hidden"}`}></input>

        </div>
        <ul className='pt-2'>
            {Menus.map((menu, index)=>(
                <>
                <Link to={menu.path}>               <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-light-white rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                    <span className='text-2xl block float-left'>
                     {menu.icon?menu.icon:<RiDashboardFill/>}
                    </span>
                    <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                </li>
                </Link>
 
                </>
            ))}
        </ul>
       </div>

    
    </div>
   <div className='flex flex-col w-full'>
    <div className='flex  w-full'>
            <h1 className='text-2xl w-full shadow-sm p-4 shadow-black text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Dashboard Page</h1>
        </div>
            
        <div className='flex  grid-flow-row space-x-3 justify-center mt-4'>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Students </div>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Teachers</div>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Admissions</div>
            <div className='grid w-46 shadow-sm p-10  shadow-black'>Projects</div>
        </div>
    </div>
    </div>
  )
}
export default DashBoard;

