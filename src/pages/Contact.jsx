import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import  Fox  from "../models/Fox";
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';



const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const typingTimeoutRef = useRef(null);

const [currentAnimation, setCurrentAnimation] = useState("idle");

const {alert,showAlert,hideAlert} = useAlert();


const handleChange = ({ target: { name, value } }) => {
  setForm({ ...form, [name]: value });
  setCurrentAnimation("walk");

  if (typingTimeoutRef.current) {
    clearTimeout(typingTimeoutRef.current);
  }

  typingTimeoutRef.current = setTimeout(() => {
    setCurrentAnimation("idle");
  }, 1500); // 1.5 seconds of inactivity → go idle
};



  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setIsLoading(false);
      showAlert({ show : true, text: "Message sent successfully!", type: "success" });
      
     // Clear form

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });

      },[5000]  ); 
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation("idle");
      console.error("EmailJS Error:", error);
      showAlert({ show : true, text: "Failed to send message. Please try again.", type: "danger" });
    });
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert{...alert} />}
      
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-7 mt-14"
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Penguin"
              required
              value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
/>
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="penguin@antarctica.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              className="input"
              rows={5}
              placeholder="Want some snow ☃️"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[350px]
      '>
        <Canvas 
        camera={{ position: [0, 0, 5],
          fov: 75,
          near: 0.01,
          far: 1000,
         }}>

<directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          
     <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5,0.5,0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
