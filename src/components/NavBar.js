import './NavBar.css'
import photo from './../../public/images/photo.jpg'
import logo from './../../public/images/facebook_logo.png'
import home from './../../public/icons/svg/home-alt2.svg'
import watch from './../../public/icons/svg/tv.svg'
import store from './../../public/icons/svg/bag.svg'
import groups from './../../public/icons/svg/people.svg'
import gaming from './../../public/icons/svg/play.svg'
import menu from './../../public/icons/svg/apps.svg'
import chats from './../../public/icons/svg/chat.svg'
import notify from './../../public/icons/svg/bell.svg'

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