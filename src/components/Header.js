import React from 'react'
import HeaderButton from './HeaderButton'
import logo from '../icon.png'
import githubLogo from '../github.png'
import instagramLogo from '../instagram.png'
import mailLogo from '../mail.png'
import SocialBubble from './SocialBubble'

const Header = (props) => {

    const buttons = [
            {
                id:4,
                text: '',
                gridColumn: "1 / 2",
                imgSrc: logo,
                ref: props.welcomeRef
            },
            {
                id: 1,
                text: 'Home',
                gridColumn: "2 / 3",
                imgSrc: '',
                ref: props.welcomeRef
            },
            {
                id:2,
                text: 'Work',
                gridColumn: "3 / 4",
                imgSrc: '',
                ref: props.workRef
            },
            {
                id:3,
                text: 'About',
                gridColumn: "-3 / -2",
                imgSrc: '',
                ref: props.aboutRef
            }
        ]

    return (
        <div className="header">
            {buttons.map((button) => (
                <HeaderButton key={button.id} button={button}/>
            ))}
            <div className="headerIcons">
                <SocialBubble imageSrc={githubLogo} link="https://github.com/MaximilianMat" desc="Github"/>
                <SocialBubble imageSrc={instagramLogo} link="https://www.instagram.com/maxmatscher/" desc="Instagram"/>
                <SocialBubble imageSrc={mailLogo} link="mailto:maxi.matscher@gmail.com" desc="Email"/>
            </div>
        </div>
    )
}

export default Header
