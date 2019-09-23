import React from 'react'
import PropTypes from 'prop-types'
import css3 from '../images/css-3.png'
import JS from '../images/javascript.png'
import express from '../images/express.png'
import git from '../images/git.png'
import html5 from '../images/html5.png'
import js from '../images/js.png'
import node from '../images/node.png'
import PostgreSQL from '../images/PostgreSQL.png'
import postman from '../images/postman.png'
import reacticon from '../images/React-icon.png'
import s3 from '../images/s3.png'
import sqltabs from '../images/sql tabs.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            {/* <span className="icon fa-diamond"></span> */}
            <img className='one' src={sqltabs}  alt="sequel tabs logo"/>
            <img className='two' src={s3}  alt="s3 logo"/>
            <img className='three' src={reacticon}  alt="react icon logo"/>
            <img className='four' src={postman}  alt="postman logo"/>
            <img className='five' src={PostgreSQL}  alt="postgress logo"/>
            <img className='six' src={node}  alt="node logo"/>
            <img className='seven' src={js}  alt="js logo"/>
            <img className='eight' src={html5}  alt="html5 logo"/>
            <img className='nine' src={git}  alt="git logo"/>
            <img className='ten' src={express}  alt="express logo"/> 
            <img className='eleven' src={css3}  alt="css logo"/>
            <img className='twelve' src={JS}  alt="javascript logo"/>
            
        </div>
        <div className="content">
            <div className="inner">
                <h1>Rob Knowles</h1>
                <p>Full Stack JavaScript web developer by day, dad, husband, motocrosser, hunter, sports enthusiast by night.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
