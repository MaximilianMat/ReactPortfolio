const HeaderButton = (props) => {
    const executeScroll = () => {
        props.button.ref ? props.button.ref.current.scrollIntoView() : void 0
    }
    return (
        <div className="hButton" style={{gridColumn: props.button.gridColumn}} onClick={executeScroll}>
            {props.button.imgSrc !== '' ? <img alt="logo" src={props.button.imgSrc}></img> : props.button.text}
        </div>
    )
}

export default HeaderButton
