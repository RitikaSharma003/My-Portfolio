import React ,{ useRef, useState }from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailjs from "@emailjs/browser";

// const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [success, setSuccess] = useState("");
//   const handleName = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleMessage = (e) => {
//     setMessage(e.target.value);
//   };
//   const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm("service_wqqfm5r", "template_ku02q5h", form.current, {
//         publicKey: "oE58D5MxYtg-ofcz3",
//       })
//       .then(
//         () => {
//           setEmail("");
//           setName("");
//           setMessage("");
//           setSuccess("Message Sent Succesfully!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

// export const Contact = () => {
//   return (


//      <div>
//       <p className={styles.success-message}>{success}</p>
//       <form ref={form} onSubmit={sendEmail} className={styles.form-container}>
//         <input
//           type="text"
//           name="from_name"
//           placeholder="Your Name"
//           required
//           className="input-name"
//           value={name}
//           onChange={handleName}
//         />
//         <input
//           type="email"
//           name="from_email"
//           placeholder="Your Email"
//           required
//           className="input-email"
//           value={email}
//           onChange={handleEmail}
//         />
//         <textarea
//           type="text"
//           name="message"
//           rows="9"
//           cols="50"
//           placeholder="Message"
//           required
//           className="input-message"
//           value={message}
//           onChange={handleMessage}
//         />
//         <button type="submit" className={styles.submit-button}>
//           Send
//         </button>
//       </form>
//     </div>
  
//     <footer id="contact" className={styles.container}>
//       <div className={styles.text}>
//         <h2>Contact</h2>
//         <p>Feel free to reach out!</p>
//       </div>
//       <ul className={styles.links}>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
//           <a href="mailto:myemail@email.com">myemail@email.com</a>
//         </li>
//         <li className={styles.link}>
//           <img
//             src={getImageUrl("contact/linkedinIcon.png")}
//             alt="LinkedIn icon"
//           />
//           <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
//         </li>
//         <li className={styles.link}>
//           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
//           <a href="https://www.github.com/myname">github.com/myname</a>
//         </li>
//       </ul>
//     </footer>
//   );
// };

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef(null);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_wqqfm5r", "template_ku02q5h", form.current, {
          publicKey: "oE58D5MxYtg-ofcz3",
        })
        .then(
          () => {
            setEmail("");
            setName("");
            setMessage("");
            setSuccess("Message Sent Succesfully!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
     <>
      <div className={styles.contactHeading}>
      <h2>Contact Me</h2>
      <p className={styles.description} >Feel free to reach out if you'd like to collaborate you are just a few clicks away!</p>
      
    </div>


      <div id="contact"  className={styles.pageContainer}>
   <div className={styles.interior}>
    <h2>Get In Touch</h2>
    
   </div>
  
      <div className={styles.flexWrapper}>
      {/* Form Container */}
      <div className={styles.contactContainer}>
        <p className={styles.successMessage}>{success}</p>
        <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className={styles.inputName}
            value={name}
            onChange={handleName}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className={styles.inputEmail}
            value={email}
            onChange={handleEmail}
            
          />
          <textarea
            name="message"
            rows={9}
            cols={50}
            placeholder="Message"
            required
            className={styles.inputMessage}
            value={message}
            onChange={handleMessage}
          />
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>

      {/* Footer Contact Info */}
      <footer className={styles.footerContainer}>
        
        <ul className={styles.links}>
          <li className={styles.link}>
     

     <a href="https://www.instagram.com/ritika_sha_.rma/"><img className={styles.linkimg} src={getImageUrl("contact/Instagram.png")} alt="Instagram icon" /></a>
            <a className={styles.attributes}href="https://www.instagram.com/ritika_sha_.rma/">Instagram</a>
          </li>


          <li className={styles.link}>
           <a href="https://www.linkedin.com/in/ritika-sharma-62652023b/"> <img className={styles.linkimg}
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            /></a>
          <a className={styles.attributes}href="https://www.linkedin.com/in/ritika-sharma-62652023b/">
              Linkedin
            </a>
          </li>


          <li className={styles.link}>
            <a href="https://github.com/RitikaSharma003"> 
            <img className={styles.linkimg} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" /></a>
           <a className={styles.attributes} rhref="https://github.com/RitikaSharma003">Github</a>
          </li>



        </ul>
      </footer>
    </div>
   </div>
 <div style={{
    width: '100%',
    height: '1px',
    backgroundColor:"blue",
    marginTop:"40px"}}>
  </div> 
   <p className={styles.last}>
        © 2025 RitikaSharma | All Rights Reserved.
      </p>
      
    </>
  );
};
export default Contact;
