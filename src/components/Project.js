const Project = (props) => {
    return (
        <section className="card" data-aos={props.project.key%2 === 0 ? "fade-left" : "fade-right"}>
            <img src={props.project.imageSrc} alt=""></img>
            <div>
                <h3>{props.project.text}</h3>
                <span>{props.project.desc}</span>
            </div>
        </section>
    )
}

export default Project
