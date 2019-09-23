import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/GT.png'
import pic02 from '../images/SD.png'
import pic03 from '../images/family.jpg'
import pic04 from '../images/moto.jpg'
import pic05 from '../images/hunt.jpg'
import pic06 from '../images/nodb.png'
import pic07 from '../images/Rob.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic07} alt="" /></span>
          <p>Hi, I'm Rob! I'm a sales professional turned web developer. In 2019 I changed my life and changed my career by attending and graduating from DevMountain bootcamp in Lehi Utah. Now I've set myself on a lifelong journey of learning and perfecting new technologies, and love building and contributing to awesome projects. I'm familiar with Javascript, the React library, Node, Express, PostgreSQL, HTML, and CSS. I've integrated/worked with technoligies like, Amazon AWS S3, Cloudinary, Stripe, Quill.js, Nodemailer, Sockets, and testing with Postman in my projects. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>My whole life I've worked hard to support myself, live the kind of life I want to live and to have a sense of accomplishment.  I worked my way through college, graduating as fast as I could so I could enter the work force and start a career.  I became heavily involved in a few different companies and through my hard work and loyalty was priveleged to be trusted with a number of high-level positions.  I learned a lot about business and a lot about myself. In the summer of 2019 I decided that I wanted to take another direction professionaly, and enrolled at DevMountain where I started my new vocation of Web Developer.  I've loved every minute of it and am excited to contribute to some growing companies from a different perspecive now, but still able to bring the same professionalism and knowledge to the table!  Check out my <a href="https://drive.google.com/file/d/1tuyuabL8iU_maouAIj7xJOI8DjKBqeWN/view?usp=sharing">resume</a> for a rundown of my past experience!</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h4><a href='https://www.syndicate-development.com'>syndicate-development.com</a></h4>
          <p>This is the first front to back end website that I created.  My friend has a business but no website, so I offered to make one for him according to his needs.  In two weeks I was able to complete a website that not only was advertisement for his business but allowed him to have a full back end admin page where he could create his own blog posts and tech tips, upload photos from his local computer or phone and share his creations with the world.  This was a personal project while I was attending DevMountain, and I selected something that would test my knowledge and also push me to produce something awesome since it was for someone else and it turned into a great production.  Oh, I also won the best styling award for the design! This is still a work in progress that I am using to learn new technologies, as I am currently working on new features for him on his admin page, namely a service request queue system, payment option for his customers, inventory system, etc.</p>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h4><a href='104.248.178.127:4200'>Game Traders</a></h4>
          <p>Game Traders is a group collaboration I worked on during my time at DevMountain.  It was a great insight into working with teams, reading other people's code and trying to bring something together that 3 people were working on.  There were a lot of cool new technologies that I was able to learn with this project including integration of Stripe payment and using Sockets for chatting.  The premise of Game Traders is a peer to peer video game trading website where you can connect with other users around the country and trade games with them directly.  Feel free to create an account and play around with the website, its hosted but obviously not a production website.  If you don't feel like creating a new account, feel free to use Username: greg, Password: password!</p>
          <span className="image main"><img src={pic06} alt="" /></span>
          <h4><a href='https://fervent-raman-53b41f.netlify.com/'>Backpack Tool</a></h4>
          <p>This was my first real project ever, it is a simply backpacking packing tool that I wanted to create to be able to show the backpack/hunting stuff that I own and then be able to add stuff to my pack so I could see the estimated weight and value of the pack.  It also helps me create a packing list so I dont forget anything!  No database here, just the first opportunity I had to create a full CRUD application.  This was only after about a few weeks of learning to code! </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="family" /></span>
          <p>I'm married to a beautiful woman named Melissa and we are blessed to have the two most beautiful daughters in the world! These three girls are the reason I work hard and are my ultimate motivation in life!</p>
          <span className="image main"><img src={pic04} alt="moto" /></span>
          <p>Motocross is my ultimate passion and obsession.  I have a great group of cousins/friends that make up my riding group.  We ride for fun but pretend like we are pros. Every year we take an annual motocross trip to the moto Mecca in Southern California where we spend a week riding some of the most famous tracks in the world.</p>
          <span className="image main"><img src={pic05} alt="moto" /></span>
          <p>When the weather cools down and the leaves turn color, you can find me deep in the back country scouting and hunting for deer, elk and black bear.  Hunting is a great escape for me where I can tune out the rest of the world and be in the moment with nature and my thoughts!</p>

          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h4>Send me an email, or check me out at one of the links below...or both!</h4>
          <form  method="POST" action="https://formspree.io/robertknowles02@msn.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/robert-knowles-187072127/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.youtube.com/channel/UCis4AJ9eLFPuclxz5duxnwA?view_as=subscriber" className="icon fa-youtube"><span className="label">Youtube</span></a></li>
            <li><a href="https://www.instagram.com/mutantrobbyk/?hl=en" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/mutantrobbyk" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main