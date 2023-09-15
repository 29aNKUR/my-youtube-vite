import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomImage, randomComments, randomName } from "../utils/helper";
import ChatMessage from "./ChatMessage";


const LiveComments = ({ name, message }) => {

    const dispatch = useDispatch();

    const chatMessages = useSelector(state=>state.chat.messages)

    useEffect(() => {
        const i = setInterval(()=>{
          dispatch(addMessage({
            userImage:getRandomImage(),
            name:randomName(),
            message:randomComments(),
          }))
          // console.log("API Polling")
        },1000)

        return ()=> clearInterval(i);
    }, [])
    

  return (
    <div className="h-[600px] border border-black shadow-sm ml-2 p-1 bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {/* {console.log(randomName())} */}
     {/* {console.log(randomComments(2))} */}
      {/* <ChatMessage name={"ankur"} message={"asdfsdafsa"} />
      <ChatMessage name={"ankur"} message={"asdfsdafsa"} />
      <ChatMessage name={"ankur"} message={"asdfsdafsa"} />
      <ChatMessage name={"ankur"} message={"asdfsdafsa"} />
      <ChatMessage name={"ankur"} message={"asdfsdafsa"} />
      <ChatMessage name={"ankur"} message={"asdfsdafsa"} /> */}
{chatMessages.map((c,i)=><ChatMessage key={i} userImage={c.userImage} name={c.name} message={c.message} />)}
    </div>
  );
};

export default LiveComments;
