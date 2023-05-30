import { motion } from 'framer-motion'
import React,{useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import {styles} from '../style'
import {SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {EarthCanvas} from './canvas'
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_pigfht8",
      "template_5k74hrh",
      {
        from_name:form.name,
        to_name:"Vijay",
        from_email:form.email,
        to_email:"vijaykamalr@gmail.com",
        message:form.message
      },
      "iNIa3TEHr6dSX3Hdv"
      ).then(()=>{
        setLoading(false);
        alert("Thank you, I will get back to you as soon as possible")
        setForm({
          name:'',
          email:'',
          message:''
        })
      },(error)=>{
        setLoading(false);
        alert("Something went wrong")
      })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2, 1)}
      className='flex-[0.75] bg-black-100 rounded-2xl p-8'>
        <p className={styles.sectionSubText}> Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input name="name" value={form.name} onChange={handleChange} placeholder="what's your Name?" className='bg-tertiary py-4 text-white placeholder:text-secondary px-6 rounded-lg outline-none border-none font-medium'/>
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Email</span>
          <input name="email" value={form.email} onChange={handleChange} placeholder="what's your Email?" className='bg-tertiary py-4 text-white placeholder:text-secondary px-6 rounded-lg outline-none border-none font-medium'/>
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <textarea rows={7} name="message" value={form.message} onChange={handleChange} placeholder="what do you want to say?" className='bg-tertiary py-4 text-white placeholder:text-secondary px-6 rounded-lg outline-none border-none font-medium'/>
        </label>
        <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadonw-primary rounded-xl'>{loading?'Sending...': "Send"}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right','tween',0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")