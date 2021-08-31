const SocialBubble = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <div className="socialBubble" style={{backgroundImage: `url(${props.imageSrc})`}} alt={props.desc}/>
        </a>
    )
}

export default SocialBubble
