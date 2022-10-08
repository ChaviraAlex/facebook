import './NavBar.css'
import photo from'/home/digestgi/Desktop/projects/facebook/src/images/photo.jpg'
import logo from '/home/digestgi/Desktop/projects/facebook/src/images/facebook_logo.png'
import home from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/home-alt2.svg'
import watch from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/tv.svg'
import store from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/bag.svg'
import groups from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/people.svg'
import gaming from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/play.svg'
import menu from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/apps.svg'
import chats from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/chat.svg'
import notify from '/home/digestgi/Desktop/projects/facebook/src/icons/svg/bell.svg'

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