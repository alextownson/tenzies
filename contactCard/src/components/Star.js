import starNoFill from '../assets/star-01.png'
import starFill from '../assets/star-02.png'

export default function Star(props) {

    const starIcon = props.isFilled ? starFill : starNoFill

    return ( 
        <img className='card--star' src={starIcon} onClick={props.handleClick}/>
        
    )
}