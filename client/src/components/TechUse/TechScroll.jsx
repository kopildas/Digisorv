
import { useScroll, useTransform, motion } from 'framer-motion';
// import Picture1 from '../../public/images/1.jpg'
// import Picture2 from '../../public/images/2.jpg'
// import Picture3 from '../../public/images/3.jpg'
import Lenis from 'lenis';

// import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function TechScroll() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="overflow-hidden bg-blue-00 py-5">
      {/* <div className='h-96 bg-blue-00'/> */}
      <div ref={container} >
        <Slide src={"https://i.ibb.co/18Yc8ND/web-design.png"} direction={'left'} left={"-50%"} progress={scrollYProgress} text={"PHP Wordpress React Nextjs"}/>
        <Slide src={"https://i.ibb.co/BNTHCqs/backend.png"} direction={'right'} left={"-20%"} progress={scrollYProgress} text={"Django Flask Laravel Nodejs"}/>
        <Slide src={"https://i.ibb.co/bgJ0yZM/database.png"} direction={'left'} left={"-105%"} progress={scrollYProgress} text={"MongoDb MySQL PostgreSQL"}/>
      </div>
      {/* <div className='h-96' /> */}
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <motion.div style={{x: translateX, left: props.left}} className="relative flex whitespace-nowrap">
      <Phrase src={props.src} text={props.text}/>
      <Phrase src={props.src} text={props.text}/>
      <Phrase src={props.src} text={props.text}/>
      <Phrase src={props.src} text={props.text}/>
      <Phrase src={props.src} text={props.text}/>
    </motion.div>
  )
}

const textGradient = {
    background: "radial-gradient(100% 100% at 100% 65%,#5b5a5a, #edededb5)",
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

const Phrase = ({src,text}) => {

  return (
    <div className={'px-5  flex gap-5 items-center bg-green-00'}>
      <p className='text-[4.5vw]' style={textGradient}>{text}</p>
      {/* <span className="relative  h-20 aspect-[4/2] rounded-full overflow-hidden bg-red-00 flex items-center justify-center p-10">
        <img style={{objectFit: "cover"}} src={src} alt="image" className='' fill/>
      </span> */}
    </div>
  )
}