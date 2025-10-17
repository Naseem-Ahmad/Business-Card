import newlink from './assets/newlink.png'
import NewMail from './assets/NewMail.png'
import NA from './assets/NA.jpg'

export default function App() {
  return (
<>
  <div className="container">
    <div className="card">
    <img src={NA} className="profile" alt="#" />
    <h2><strong>Naseem Ahmad</strong></h2>
    <p className="desgination">Full Stack Developer</p>
    <a href="https://www.creativetract.com/">CreativeTract.com</a><br/><br/>
    <a href="mailto:naseemahmad6504@gmail.com"><img src={NewMail} className="mail" width="140px" alt="#" /></a>
    <a href="https://www.linkedin.com/in/naseem-ahmad-978a21190"><img src={newlink} className="linkedin" width="140px" alt="#" />
</a>
    
    <h1 align="Left">About:</h1>
    <p align="justify">Software craftsman 🖥️ | C#, ASP.NET & ReactJS are my tools, coffee is my fuel ☕ | Turning complex problems into simple solutions, automating the boring stuff, and keeping bugs on a short leash 🐍</p>
  <h1 align="Left">Skill:</h1>
  <p align="justify">
   Code whisperer in C#, Java & JavaScript ⚡ | ASP.NET & ReactJS fan 🤓 | SQL tamer 🐍 | APIs & automation wizard ✨ | Loves clean code, coffee, and making bugs cry 🐞💥 
  </p>
  <footer>
  © 2025 All Rights Reserved
  </footer>
</div>
</div>
  </>

  );

 }


