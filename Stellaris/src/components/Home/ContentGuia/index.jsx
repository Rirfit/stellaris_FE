import '../ContentGuia/style.css'
import artigoImg from '../../../assets/images/artigoImg.svg'
import artigoImg2 from '../../../assets/images/artigoImg2.svg'

const ContentGuia =() =>{
    return (
        <div className="contentGuia">
                    <h2 id="blog">Acompanhe nossos guias e dicas!</h2>
                    <ul>
                        <li>
                            <div className="contentCard">
                                <img src={artigoImg} alt="" />
                                <p>5 maneiras de se acostumar com o uso de óculos</p>
                            </div>
                        </li>
                        <li>
                            <div className="contentCard">
                                <img src={artigoImg2} alt="" />
                                <p>Comportamentos que podem indicar a probabilidade de um possível problema visual</p>
                            </div>
                        </li>
                    </ul>
                </div>
    )
}
export default ContentGuia