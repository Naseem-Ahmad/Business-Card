import newlink from './assets/newlink.png'
import NewMail from './assets/NewMail.png'
import NA from './assets/NA.jpg'
import travel from './assets/Mytravel.png'
import ProjectInfoHelp from './ProjectInfoHelp.jsx'
import ChatWidget from './ChatWidget.jsx'

export default function App() {



  return (
<>
  <div className="container">
    <div className="card">
    <img src={NA} className="profile" alt="#" />
    <h2><strong>Naseem Ahmad</strong></h2>
    <p className="desgination">Full Stack Developer</p>
    <p><a className="website" href="https://www.creativetract.com/">CreativeTract.com</a>  👈 Click Here </p><br/>

<div className="SocialButton">
    <a href="mailto:naseemahmad6504@gmail.com"><img src={NewMail} className="mail" width="140px" alt="#" /></a>
    <a href="https://www.linkedin.com/in/naseem-ahmad-978a21190"><img src={newlink} className="mail" width="140px" alt="#" /></a>
   <a href="https://www.mytravel.naseemahmad.com/"><img src={travel} className="mail" width="140px" alt="#" /></a>
</div>

    
  <h2 className= "about">About:</h2>
    <p align="justify">Software craftsman 🖥️ | Keeping bugs on a short leash 🐍 Loves clean code, coffee, and making bugs disappear 🐞✨</p>
  <h2 className= "skill">Skill:</h2>
  <ul>
   <li className="hide-me">🧑‍💻 Mastering scalable solutions with C#, ASP.NET & ReactJS</li>
   <li className="hide-me">🧠 Turning complex challenges into simple/maintainable & scalable code</li>
   <li className="hide-me">🤖 Automating the boring, exploring smart systems & autonomous tech</li>
   <li className="hide-me">⚙️ Blending software engineering with emerging tech like AI & robotics</li>
   <li className="hide-me">🚀 Not just building apps - building smarter, future-ready systems</li>
   </ul>

  <p className="product">Products: <a href="https://ingreedyent.creativetract.com/">Ingreedyent Chef </a>  👈 Click Here</p>
     
  <br />
   <br />
    <br />

  <footer>
  © 2025 All Rights Reserved
  <ChatWidget/>
  </footer>
</div>
<ProjectInfoHelp />

</div>
  </>

  );

 }


