import React from "react"
import Container from '../components/container';

import styles from '../styles/about.module.css';

const AboutPage = () => (
  <Container>
    <div className={ `${styles.home} ${styles.flex}`}>
      <div className={ `${styles.section}` }>
        <div className={`${styles.textContent}`}>
            <h2>Workstream Collaboration and Omnichannel Customer Engagement</h2>
            <p>
            Control your communication, manage your data and have your own collaboration platform to improve team productivity. 
            Rocket.Chat is scalable and open source, replace email and improve your digital workflow.
            </p>
        </div>
      </div>
      <div className={ `${styles.section} ${styles.right}` }>
        <div className={`${styles.textContent}`}>
            <h3>Replace Email</h3>
            <p>
            Open up the conversation and remove the need for CC/BCC by using Rocket.Chat Channels and Private Groups 
            to speak to your team openly for greater transparency.Include relevant participants with the @username mention to notify 
            those immediately. For important announcements to all members of a group, use @all. Full chat history allows participants 
            to join and leave at any time.
            </p>
        </div>
      </div>
      <div className={ `${styles.section}` }>
        <div className={`${styles.textContent}`}>
            <h3>Team Chat</h3>
            <p>
            Communicate and collaborate using team chat and switch to video or audio calls with screen sharing for more efficient teamwork.
            Improve productivity by discussing and sharing ideas, projects and files with real-time or asynchronous team chat.
            </p>
        </div>
      </div>
    </div>
  </Container>
)

export default AboutPage
