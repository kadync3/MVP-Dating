
import Messages from "./messageBoard";
import MyProfile from "./myProfile";
var FooterMenu = (props) => {
  return (
  <div>
    <button className="menuButtons" onClick={()=>props.setMode('profile')}>Profile</button>
    <button className="menuButtons" onClick={()=>props.setMode('swiping')}>Swipe</button>
    <button className="menuButtons" onClick={()=> props.setMode('messages')}>Messages</button>
  </div>
  )
}

export default FooterMenu;