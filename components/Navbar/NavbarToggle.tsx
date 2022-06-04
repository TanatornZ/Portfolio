import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
type Props = {
    showToggle:boolean
}

function NavbarToggle({showToggle}: Props) {
  return (
    <div className={`absolute bg-black w-screen top-0 left-0  ${showToggle ? 'translate-y-16' : '-translate-y-48'} transition-transform duration-500 `}>
        <ul className='text-white p-3 text-center text-lg'>
            <li>About Me</li>
            <li className='py-3'>Skill</li>
            <li>Contact</li>
            <li ><AiFillGithub size="30" color="white" className='mx-auto my-3' /></li>
        </ul>
    </div>
  )
}

export default NavbarToggle