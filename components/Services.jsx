import Link from "next/link"
import Image from "next/image"
import style from "../styles/Services.module.css"

const Services = ( {services} ) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}> มีบริการอะไรบ้าง ?</h1>
            <h1 className={style.subtitle}> เรามีบริการที่สามารถช่วยคุณดังนี้ </h1>
            <div className={style.services}>
                {services.map( service =>(
                    <Link passHref key={service.id} href={`/Design/${service.name}`}>
                    <div className={style.service}>
                        <div className={style.descp}>{service.descp}</div>
                    <span className={style.cat}>{service.title}</span>
                    <div className={style.media}>
                        {service.video? (
                             <video src={service.video} 
                             autoPlay 
                             loop muted
                             className={service.video} />
                        ):(<Image src={`/img/${service.image}`} 
                         width="100%" 
                         height="100%" 
                         layout="responsive"
                         objectFit="cover" 
                         alt="" />)}
                    </div>
                    </div>
                </Link>
                ))};
               
            </div>
        </div>
    );
}
export default Services;