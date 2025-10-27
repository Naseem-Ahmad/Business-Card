import "./ProjectInfoHelp.css";


import { useState } from "react";

export default function ProjectInfoHelp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating ? Button */}
      <button
        onClick={() => setOpen(true)}
        className="help-btn"
      >
        ?
      </button>

      {/* Modal */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <h2>Project Overview</h2>

            <div className="section">
              <h3>🖥️ Frontend</h3>
              <p>Built with React and standard CSS.</p>
            </div>

            <div className="section">
              <h3>⚙️ Backend</h3>
              <p>Node.js + Express + PostgreSQL. (Stay tuned - coming soon!))</p>
            </div>

            <div className="section">
              <h3>☁️ Deployment</h3>
              <p>Frontend hosted on Vercel.</p> 
              <p>Backend on Render.(Stay tuned - coming soon!)</p>
            </div>

            <div className="section">
              <h3>🧠 Server</h3>
              <p>Node.js API with load balancing and logging. (Stay tuned - coming soon!)</p>
            </div>

            <button className="close-btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
