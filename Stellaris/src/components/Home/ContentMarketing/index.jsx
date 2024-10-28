import '../ContentMarketing/style.css'
import instagram from '../../../assets/icons/home/instagram.svg'
import github from '../../../assets/icons/home/github.svg'
import linkedin from '../../../assets/icons/home/linkedin.svg'
import tiktok from '../../../assets/icons/home/tiktok.svg'
import imagemDireita from '../../../assets/images/Marketing/imageLadoDireita.svg'


const  ContentMarketing = () => {
    return(
        <>
        <div className="contentMarketing">
            <div className="textContainer">
                <p>
                    <span>Fique por dentro das</span><br />
                    <span>novidades da</span><br />
                    <span><span className="colorChange">Stellaris</span> em nossas redes </span><br />
                    <span>sociais!</span>
                </p>
            </div>
            <div className="contentRedes">
                <a target="_blank" href="https://www.instagram.com/iseeyou_demoday/">
                    <img src={instagram} alt="Instagram" className='redesImg' />
                </a>
                <a target="_blank" href="./">
                    <img src={linkedin} alt="Linkedin" className='redesImg' />
                </a>
                <a target="_blank" href="./">
                    <img src={github} alt="Github" className='redesImg' />
                </a>
                <a target="_blank" href="./">
                    <img src={tiktok} alt="Tiktok" className='redesImg' />
                </a>
            </div>
            <img className='imgDireita' src={imagemDireita} alt="" />
        </div>
    
                </>
    )
} 
export default ContentMarketing