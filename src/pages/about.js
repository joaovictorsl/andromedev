import React from "react";
import Container from "../components/container";
import Image from "../components/image";

const AboutPage = () => (
  <Container>
    <section className="container mx-auto px-6 py-10">
      <div className="flex items-start flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl text-white font-bold mb-3">
            Workstream Collaboration and Omnichannel Customer Engagement
          </h2>
          <p className="text-gray-100 mb-8">
            Control your communication, manage your data and have your own
            collaboration platform to improve team productivity. Rocket.Chat is
            scalable and open source, replace email and improve your digital
            workflow.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image />
        </div>
      </div>

      <div className="flex items-start flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <Image />
        </div>
        <div className="w-full md:w-1/2 pl-10">
          <h2 className="text-3xl text-white font-bold mb-3">Replace Email</h2>
          <p className="text-gray-100 mb-8">
            Open up the conversation and remove the need for CC/BCC by using
            Rocket.Chat Channels and Private Groups to speak to your team openly
            for greater transparency.Include relevant participants with the
            @username mention to notify those immediately. For important
            announcements to all members of a group, use @all. Full chat history
            allows participants to join and leave at any time.
          </p>
        </div>
      </div>

      <div className="flex items-start flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-white font-bold mb-3">Team Chat</h4>
          <p className="text-gray-100 mb-8">
            Communicate and collaborate using team chat and switch to video or
            audio calls with screen sharing for more efficient teamwork. Improve
            productivity by discussing and sharing ideas, projects and files
            with real-time or asynchronous team chat.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image />
        </div>
      </div>
    </section>
  </Container>
);

export default AboutPage;
