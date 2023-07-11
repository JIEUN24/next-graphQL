import React from "react";
import MsgItem from "./MsgItem";

const MsgList = () => {
  const UserIds = ["roy", "roy"];
  const getRandomUserId = () => UserIds[Math.round(Math.random())];
  const msg = Array(50)
    .fill(0)
    .map((_, i) => ({
      id: 50 - i,
      userId: getRandomUserId(),
      timeStamp: 1234567890123 + (50 - i) * 1000 * 60,
      text: `${50 - i} mock text`,
    }));

  return (
    <ul className='messages'>
      {msg?.map((ele) => (
        <MsgItem key={ele.id} {...ele} />
      ))}
    </ul>
  );
};

export default MsgList;
