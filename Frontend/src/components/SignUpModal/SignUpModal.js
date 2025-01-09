import React, { useEffect } from "react";
import "./SignUpModal.css"; 

const SignUpModal = ({ isVisible, onClose }) => {
  // Disable scrolling when the modal is visible
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      // Clean up by removing the no-scroll class when the component is unmounted
      document.body.classList.remove("no-scroll");
    };
  }, [isVisible]);

  if (!isVisible) return null; 

  return (
    <div className="modal-overlay">
      <div className="modal-container">
       <div className="signUpHeading">
       <h4>Sign in to Continue</h4>
       <span className="close-icon" onClick={onClose}>&#10005;</span>
       </div>
       <br /> <br />
       <input className="signUp_inp" type="number" placeholder="Mobile Number" />
       <br /> <br />
       <button className="signUp_continueBtn">CONTINUE</button>
       <br /> <br />
       <p className="signUp_OrContinue">OR CONTINUE WITH</p>
       <div className="signUp_twoSections">
        <img style={{width:'50px',border:'2px solid rgb(232,233,237)',padding:'5px 10px',cursor:'pointer'}} className="facebookImg" src="https://images.fancode.com/skillup-uploads/fc-web/fb-color-icon.png?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvZmMtd2ViL2ZiLWNvbG9yLWljb24ucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjQ4LCJoZWlnaHQiOjQ4fSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==" alt="facebook_img" />
        <img style={{width:'50px',border:'2px solid rgb(232,233,237)',padding:'5px 10px',cursor:'pointer'}} className="googleImg" src="https://images.fancode.com/skillup-uploads/icons/google-g-logo.png?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvaWNvbnMvZ29vZ2xlLWctbG9nby5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJ3aWR0aCI6NDgsImhlaWdodCI6NDh9LCJ3ZWJwIjp7InF1YWxpdHkiOjYwLCJsb3NzbGVzcyI6ZmFsc2V9fSwib3V0cHV0Rm9ybWF0Ijoid2VicCJ9" alt="google_img" />
       </div> <br /> <br />
       <p className="signUp_termsAndConditions">By logging in, you agree to our <a href="/termsAndConditions" target="_blank">terms & conditions</a></p>
      </div>
    </div>
  );
};

export default SignUpModal;
