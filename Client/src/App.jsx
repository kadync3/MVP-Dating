import { useState } from 'react';
import Swiping from './swiping.jsx';
import FooterMenu from './footerMenu.jsx';
import Messages from './messageBoard.jsx';
import MyNewProfile from './myProfile.jsx';



function App() {
const [mode, setMode] = useState('swiping')
if (mode === 'messages'){
  return (
    <>
  <Messages/>
  <FooterMenu setMode={setMode}/>
  </>
  )
} else if (mode === 'swiping') {
  return (
    <div >
      <Swiping/>
          <div>
            <button >No</button>
            <button >Yes</button>
          </div>
        <FooterMenu setMode={setMode}/>
     </div>
  )
} else if (mode === 'profile'){

  return(
 <>
 <MyNewProfile/>
 <FooterMenu setMode={setMode}/>
 </>
  )
}
}
export default App
