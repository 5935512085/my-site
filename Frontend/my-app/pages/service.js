
import Services from '../components/Services'
import { data } from '../data'

const service = ({services}) => {
    return (
        <div className='flex flex-wrap'>
            <Services services={services}/>
        </div>
    )
} 
export default service
export const getStaticProps = async ()=>{
    const services = data;
    return {
       props : { services },
    };
  };