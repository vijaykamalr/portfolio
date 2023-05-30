/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({title, index, icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rouded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold items-center'>{title}</h3>

        </div>
        </motion.div></Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
    I am a seasoned software developer with 8 years of experience in the industry. My passion for coding and problem-solving has led me to specialize in JavaScript, React, Angular, and AWS.
    Throughout my career, I have honed my skills in developing robust and scalable applications using these technologies. I am well-versed in JavaScript, utilizing it to create dynamic and interactive web experiences. React and Angular are my go-to frameworks for building efficient and maintainable user interfaces, allowing me to create intuitive and responsive front-end solutions.
    In addition to my expertise in front-end development, I have also gained significant experience in AWS (Amazon Web Services). I have successfully deployed and managed applications on AWS, utilizing its various services such as EC2, S3, and Lambda.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {
        services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))
      }
    </div>
    </>
  )
}

export default SectionWrapper(About,'about')