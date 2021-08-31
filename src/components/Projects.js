import Project from './Project'
import imgProject1 from '../trading.png'

const Projects = () => {

    const projects = [
        {
            key: 1,
            text: 'Crypto Trader',
            imageSrc: imgProject1,
            desc: 'Trading bot that uses Neural Networks to predict the market!'
            
        },
        {
            key:2,
            text: 'This Website',
            imageSrc: imgProject1,
            desc: 'This very website you are currently looking at!'
        },
        {
            key:3,
            text: 'Project 3',
            imageSrc: imgProject1,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus totam velit. Incidunt odio nesciunt dignissimos facilis laborum ut quibusdam. Ab aliquam dolore culpa magnam a nulla ipsum aperiam! Officiis.'
        }
    ]

    return (
        <>
        {projects.map((project) => (
            <Project key={project.key} project={project}/>
        ))}
        </>
    )
}

export default Projects
