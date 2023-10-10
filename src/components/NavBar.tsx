import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {useState} from "react"
import {Link} from "react-router-dom"

type Link = {
    name: string,
    path: string
}

const NavBar = () => {

    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState<boolean>(false)

    const nav = [ 
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Programowanie",
            path: "/programowanie"
        },
        {
            name: "O mnie",
            path: "/about"
        },
        {
            name: "Narzędzia",
            path: "/narzedzia"
        },
        {
            name: "Kontakt",
            path: "/kontakt"
        }
    ]

  return (<>
    <nav className={`${isMobileMenuOpen ? "block absolute inset-0 bg-white px-8 py-16 text-2xl z-50" : "hidden lg:block"}`}>
        <ul className=' flex flex-col gap-10 font-bold text-blue-700 lg:flex-row'>
            {
                nav.map((link: Link) => <li key={link.path} className='hover:underline'><Link to={link.path}>{link.name}</Link></li>)
            }
            
        </ul>
    </nav>
    <span className="text-2xl relative z-50 lg:hidden" onClick={() => setIsMobileMenuOpen(prev => !prev)} >{
        !isMobileMenuOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark}/>
    }
    </span>
    </>
  )
}

export default NavBar