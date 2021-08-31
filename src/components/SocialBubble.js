const SocialBubble = (props) => {
    return (
        <a href={props.link}>
            <img className="socialBubble" src={props.imageSrc} alt={props.desc}></img>
        </a>
    )
}

export default SocialBubble
