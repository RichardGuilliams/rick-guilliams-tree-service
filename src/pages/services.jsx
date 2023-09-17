import ServiceCard from '../components/cards/ServiceCard';

const Services = () => {
    return (
        <>
            <div className='page-background'/>
            <div className="page-overlay"/>
            <div className="page services">
                <div className='page-section'>
                    <h1 className="page-heading">Services</h1>
                    <ServiceCard serviceTitle={"Tree Removal: Ensuring Your Property's Safety"} serviceDescription={"Damaged and dying trees pose a significant risk to your property's safety. Don't wait for disaster to strike! Trust our expert team to safely fell and remove hazardous trees from your premises."} serviceImgUrl={'./img/rick-guilliams-limb-removal.jpg'} serviceImgAlt={'Tree Removal Image'}/>
                    <ServiceCard serviceTitle={'Trimming and Pruning: Nurturing Trees for Lifelong Health'} serviceDescription={'Give your trees the care they deserve! Our expert trimming and pruning service ensures optimal growth, fostering the health and happiness of your trees for years to come.'} serviceImgUrl={'./img/rick-guilliams-pruning.jpg'} serviceImgAlt={'Limb Removal Image'}/>
                    <ServiceCard serviceTitle={'Tree Planting: Enrich Your Property and the Planet'} serviceDescription={'At Rick Guilliams Tree Service, we believe in nurturing nature. Our tree planting service not only adds life and beauty to your property but also plays a vital role in giving back to the ecosystem.'} serviceImgUrl={'./img/rick-guilliams-tree-planting.jpg'} serviceImgAlt={'Tree Planting Image'}/>
                    <ServiceCard serviceTitle={'Stump Grinding And Removal: Effortless Yard Transformation'} serviceDescription={'Unleash the full potential of your yard! Our expert stump grinding and removal service eliminates hazardous stumps, ensuring a safe environment and a visually appealing landscape.'} serviceImgUrl={'./img/rick-guilliams-stump-removal.jpg'} serviceImgAlt={'Stump Grinding Image'}/>
                    <ServiceCard serviceTitle={'Tree Cabling and Bracing: Strengthening Trees for a Safer Future'} serviceDescription={"Nurturing nature with precision and care! Our skilled arborists employ expert tree cabling and bracing techniques, utilizing robust cables and braces to reinforce your trees' structural integrity."} serviceImgUrl={'./img/rick-guilliams-bracing.jpg'} serviceImgAlt={'Tree Bracing Image'}/>
                </div>
            </div>
        </>
    )
}

export default Services;