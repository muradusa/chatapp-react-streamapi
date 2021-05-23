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

const ChatMain = () => {
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

  const filters = { type: "messaging" };
  const sort = { last_message_at: -1 };
  const theme = "messaging dark";
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

  return (
    <div>
      {/* <button onClick={login}>Login</button> */}
      <button onClick={logout}>Log out</button>

      <Chat client={chatClient} theme="messaging light">
        <ChannelList filters={filters} sort={sort} Paginator={Paginator} />
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

export default ChatMain;
