import React, { useEffect } from "react";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelList,
  InfiniteScrollPaginator,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { auth } from "./Firebase";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./userSlice";

import "stream-chat-react/dist/css/index.css";

const Home = () => {
  const user = useSelector(selectUser);

  const chatClient = StreamChat.getInstance("6q6pcdr3h4av");

  chatClient.connectUser(
    {
      id: user.uid,
      name: user.displayName,
      image: user.photo,
    },
    chatClient.devToken(user.uid)
  );

  const login = () => {
    chatClient.connectUser(
      {
        id: user.uid,
        name: user.displayName,
        image: user.photo,
      },
      chatClient.devToken("murad")
    );
  };

  const logout = () => {
    chatClient.disconnectUser();
    auth.signOut();
  };

  // const filters = { type: "messaging" };
  const sort = { last_message_at: -1 };
  const theme = "messaging light";
  const Paginator = (props) => (
    <InfiniteScrollPaginator threshold={300} {...props} />
  );

  // const channel = chatClient.channel("messaging", {
  //   // add as many custom fields as you'd like
  //   image: "https://www.drupal.org/files/project-images/react.png",
  //   name: "Multiple Channel",
  //   members: [
  //     "YK6BBrvv0SdqhcXEmeh5Wy3Iocl1",
  //     "BvCBICUiDFTpIGIZ2JL3UG2DaO13",
  //     //   "r4XL5UjwYHR2qNMuXVWwI5kNRKI3",
  //   ],
  // });

  const handleAddChannel = () => {
    const channelName = prompt("add channel name");
    const channel = chatClient.channel("messaging", channelName, {
      name: channelName,
      // image: user.photo,
    });

    if (channelName) {
      channel.create().then(() => {
        const location = window.location;
        location.reload();
      });
    }
  };

  const handleDeleteChannel = () => {
    const channelName = prompt(
      "type the name of the channel you want to delete"
    );
    const channel = chatClient.channel("messaging", channelName);
    channel.delete().then(() => {
      const location = window.location;
      location.reload();
    });
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>

      <Chat client={chatClient} theme={theme}>
        <ChannelList sort={sort} Paginator={Paginator} />

        <Channel>
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

export default Home;
