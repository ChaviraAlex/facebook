import './NavBar.css'

import photo from './../images/photo.jpg'
import logo from './../images/facebook_logo.png'
import home from './../icons/svg/home-alt2.svg'
import watch from './../icons/svg/tv.svg'
import store from './../icons/svg/bag.svg'
import groups from './../icons/svg/people.svg'
import gaming from './../icons/svg/play.svg'
import menu from './../icons/svg/apps.svg'
import chats from './../icons/svg/chat.svg'
import notify from './../icons/svg/bell.svg'

function NavBar (){
   return (
       <div className='nav-bar'>
           <div className='Search'>
            <img src={logo} className='Logo'/>
           <div>
            <input type='text' placeholder='Buscar en facebook'></input>
           </div>
           </div>
           <div className='navbar-icons-center'>
               <a href=''><img src={home}/></a>
               <a href=''><img src={watch}/></a>
               <a href=''><img src={store}/></a>
               <a href=''><img src={groups}/></a>
               <a href=''><img src={gaming}/></a>
               </div>
               <div className='navbar-icons-right'>
                <a href=''><img src={menu}/></a>
                <a href=''><img src={chats}/></a>
                <a href=''><img src={notify}/></a>
                <a href=''><img src={photo} className='Photo'/></a>
               </div>
       </div>
   );
}

export default NavBar;