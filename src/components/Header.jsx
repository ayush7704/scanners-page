import { useContext } from 'react'
import BlackLogo from '../assets/logos/logo'
import logo from '../assets/logos/207762094.png'
import { globaldata } from './context/context'

function Header({classes}) {
  const {cardsData} = useContext(globaldata)
  return (
    <header className={`${classes} bg-white relative z-[10] shadow-[0px_9px_25px_-21px_black] px-[12px_16px] pt-[0.30rem] pb-1 flex items-center justify-between`}>
        <div>
         {/* <BlackLogo classes="max-[280px]:w-[9rem] w-[11.875rem] md:w-[13.125rem]"/> */}
         <img src={logo} className="max-[280px]:w-[9rem] w-[11.875rem] md:w-[13.125rem]"/>
        </div>
        <nav className='flex items-center gap-1'>
          {
            cardsData.map((value,ind)=>(
                <a key={ind} href={`#${value.cardName}`} className='capitalize p-3 gap-1 flex items-center'><span className='flex items-center justify-center w-5 h-5 rounded-[50%] bg-[linear-gradient(0deg,_rgb(125,83,155),_rgba(0,0,0,1),_rgba(0,0,0,1),_rgb(170,189,205))] font-medium text-white'>{ind+1}</span>{value.cardName}</a>
            ))
            }
            </nav>
    </header>
  )
}

export default Header