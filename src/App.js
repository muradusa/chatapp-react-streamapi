import React, { useEffect } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("6q6pcdr3h4av");

chatClient.connectUser(
  {
    id: "murad",
    name: "Murad Cholukov",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQFNmzrc9sYQAA/profile-displayphoto-shrink_100_100/0/1618869151834?e=1625097600&v=beta&t=dnJbaZj4Xvi-EFOcDpLXxqifC0CQDwPWj2hdsR7zniw",
  },
  chatClient.devToken("murad")
);

const login = () => {
  chatClient.connectUser(
    {
      id: "murad",
      name: "Murad Cholukov",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQFNmzrc9sYQAA/profile-displayphoto-shrink_100_100/0/1618869151834?e=1625097600&v=beta&t=dnJbaZj4Xvi-EFOcDpLXxqifC0CQDwPWj2hdsR7zniw",
    },
    chatClient.devToken("murad")
  );
};

const logout = () => {
  chatClient.disconnectUser();
};

const channel = chatClient.channel("messaging", "murad", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Awesome Channel",
  members: ["murad", "jonh"],
});

const App = () => {
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Log out</button>

      <Chat client={chatClient} theme="messaging light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default App;
