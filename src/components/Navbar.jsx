import logo from '../images/logo.svg'
import invert from '../images/invert.svg'
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Context } from '../context/Context'
function Navbar() {
    const {search,setSearch,getData} = useContext(Context)

    const [theme,setTheme] = useState(false)

    useEffect(()=>{
        document.documentElement.dataset.theme = theme ? "light" : "dark"
    },[theme])

  return (
    <nav className="navbar">
        <div className="container">
            <a href="#" className="navbar__logo">
                <img src={logo} alt="logo" />
                <span>REACT WEATHER</span>
            </a>
            <div className="navbar__block">
                <img src={invert} alt="theme" onClick={()=>setTheme(!theme)} />
                <div className="navbar__search">
                    <input 
                        type="text" 
                        placeholder='Search...'
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar