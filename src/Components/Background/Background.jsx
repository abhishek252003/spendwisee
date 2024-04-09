import "./Background.css"
import video1 from '../../assets/video1.mp4'
import img1 from "../../assets/img1.jpg"
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import loggo from '../../assets/loggo.jpg'
// import lgo from '../../assets/lgo.jpg'


const Background = ({ playStatus, heroCount }) => {

    if (playStatus) {
        return (
            <video className="background  fade-in" autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
        )
    }

    else if (heroCount === 0) {
        return <img src={img1} className="background fade-in" alt='' />
    }
    else if (heroCount === 1) {
        return <img src={img2} className="background fade-in" alt='' /> 
    }
    else if (heroCount === 2) {
        return <img src={img3} className="background fade-in" alt='' />
    }
    else if (heroCount === 3) {
        return <img src={loggo} className="background fade-in" alt='' />
    }
}
export default Background 