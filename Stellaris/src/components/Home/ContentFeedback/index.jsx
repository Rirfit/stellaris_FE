import '../ContentFeedback/style.css'
import avatar1 from '../../../assets/icons/home/avatar1.svg'
import avatar2 from '../../../assets/icons/home/avatar2.svg'
import avatar3 from '../../../assets/icons/home/avatar3.svg'
import avatar4 from '../../../assets/icons/home/avatar4.svg'


const ContentFeedback = () => {
    return (
        <div className="contentFeedback">
            <h2 id="feedback">Feedback dos Usuários</h2>
            <div>
                <div className="cardFeedback">
                    <h4>Jailson O.</h4>
                    <div><img src={avatar4} alt="" /></div>
                    <p>IA muito útil</p>
                    <div>★★★★★</div>
                </div>
                <div className="cardFeedback">
                    <h4>Rosane</h4>
                    <div><img src={avatar2} alt="" /></div>
                    <p>Bom site</p>
                    <div>★★★★★</div>
                </div>
                <div className="cardFeedback">
                    <h4>Aurora</h4>
                    <div><img src={avatar3} alt="" /></div>
                    <p>Gostei demais</p>
                    <div>★★★★★</div>
                </div>
                <div className="cardFeedback">
                    <h4>Júlio</h4>
                    <div><img src={avatar1} alt="" /></div>
                    <p>Ajudou muito!</p>
                    <div>★★★★★</div>

                </div>
            </div>
        </div>
    )
}
export default ContentFeedback;