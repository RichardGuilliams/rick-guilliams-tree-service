const ServiceCard = ({ serviceTitle, serviceDescription, serviceImgUrl, serviceImgAlt}) => {
    return (
        <>
            <div className='card service-card'>
                <h2 className='service-card-title'>{serviceTitle}</h2>
                <img className='service-card-img' width={300} height={250} src={serviceImgUrl} alt={serviceImgAlt} />
                <p className='service-card-desc'>{serviceDescription}</p>
                <a className="home-cta" href="/">Learn More</a>
            </div>
        </>
    )
}

export default ServiceCard;