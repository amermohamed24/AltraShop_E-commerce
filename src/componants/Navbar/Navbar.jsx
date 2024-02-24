'use client'
import Link from "next/link"
import { links } from "./data"
import Styles from "./Navbar.module.css"
import {Bitter} from "next/font/google"
import Button from "../elements/Button/Button"
import Logo from "../elements/Logo/Logo"
import Toggle_Mode from "../Toggle_Mode/Toggle_Mode"
import { useState } from "react"


const logoFont=Bitter({
    subsets:['latin'],
    weight:"500"
})
export default function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <>
        <div className={`${Styles.container}`} >
            <Logo />
            
            <div className={Styles.links}>
            <Toggle_Mode />
            {links.map(link=>
                <Link className={Styles.link} key={link.id} href={link.url}>{link.title}</Link>
            )}
            <Button />
            </div>
        </div>
    </>
  )
}
