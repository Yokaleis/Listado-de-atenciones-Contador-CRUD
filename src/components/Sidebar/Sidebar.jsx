import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* REACT ICONS */
import { HiChevronDown } from "react-icons/hi";
/* SVGs */
import { LogoSOIVIcon } from '../Icons/iconsSVG';



export function Sidebar() {
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    return (
        <>
        <div className={`xl:h-[100vh] fixed xl:static bg-[#F7F6F9] w-[70%] md:w-[30%] lg:[w-25%] xl:w-auto h-full top-0 p-2 flex flex-col justify-between z-50 
        ${showMenu ? "left-0" : "-left-full"} transition-all`}>
            {/* LOGO */}
            <div>
            <div className='mb-20 flex justify-center'><LogoSOIVIcon/></div>
            <ul>
                <li className='mb-8'>
                    <Link to="/home" className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Home</Link>
                </li>
                <li className='mb-8'>
                    <button onClick={() => setShowSubMenu(!showSubMenu)}
                        className="w-full flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:text-primary transition-colors">
                        <span className="flex items-center font-bold gap-4">Dashboards</span>
                        <HiChevronDown
                            className={`mt-1 ${
                                showSubMenu && "rotate-180"
                            } transition-all`}
                            />
                    </button>
                    <ul className={`my-2 ${!showSubMenu && "hidden"}`}>
                        <li className='mb-2'>
                        <Link to="/ateprogramadas" className="p-4  hover:text-primary">Atenciones programadas</Link>
                        </li>
                        <li className='mb-2'>
                        <Link to="/gservicios" className="p-4 hover:text-primary">Gestión de Servicios</Link>
                        </li>
                    </ul>
                </li>

                <li className='mb-8'>
                    <Link to="/atenciones" className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Listado de atenciones</Link>
                </li>
                <li className='mb-8'>
                    <Link to="/aurgentcare" className="w-full flex items-center justify-between gap-4 py-2 px-4 font-bold hover:text-primary transition-colors">Urgent Care</Link>
                </li>               
            </ul>
            </div>
            
        </div>
        </>
    )
}