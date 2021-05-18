import React from "react";
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
      "https://getstream.io/random_png/?id=falling-poetry-4&name=falling-poetry-4",
  },
  chatClient.devToken("murad")
);

const channel = chatClient.channel("messaging", "murad", {
  // add as many custom fields as you'd like
  image: "https://www.drupal.org/files/project-images/react.png",
  name: "Awesome Channel",
  members: ["murad"],
});

const App = () => (
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
);

export default App;
