import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import { data } from '../data'
import styles from '../styles/Home.module.css'



export default function Home({services}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>AKYR0S</title>
        <meta name="description" content="Personal Abilities Service" />
      </Head>
      <Intro/>
      <Services services={services}/>
      <Testimonial/>
    </div>
  )
}
export const getStaticProps = async ()=>{
  const services = data;
  return {
     props : { services },
  };
};