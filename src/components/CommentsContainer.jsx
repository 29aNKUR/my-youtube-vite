import React from "react";

const commentsData = [
  {
    name: "Ankur Semle",
    text: "Lorem ipsum idhar udhar sab jagah.",
    replies: [
      {
        name: "Ankur Semle",
        text: "Lorem ipsum idhar udhar sab jagah.",
        replies: [
          {
            name: "Ankur Semle",
            text: "Lorem ipsum idhar udhar sab jagah.",
            replies: [
              {
                name: "Ankur Semle",
                text: "Lorem ipsum idhar udhar sab jagah.",
                replies: [
                  {
                    name: "Ankur Semle",
                    text: "Lorem ipsum idhar udhar sab jagah.",
                    replies: [
                      {
                        name: "Ankur Semle",
                        text: "Lorem ipsum idhar udhar sab jagah.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ankur Semle",
    text: "Lorem ipsum idhar udhar sab jagah.",
    replies: [],
  },
  {
    name: "Ankur Semle",
    text: "Lorem ipsum idhar udhar sab jagah.",
    replies: [],
  },
];

// console.log(CommentsData);

// single comment
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 m-2 rounded-md">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc_TaWjbx-6Sfcq3nBfaAMTqMurH3xJ0JO2hoc6wvWQ6hFYkhxW1wxSd_DQwwSn7cAfk&usqp=CAU"
        className="h-8 w-8"
        alt="logo"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};


//List of Comments
const CommentsList = ({ comments }) => {
  return comments.map((comment,index)=>(
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        {/* Recursion */}
      <CommentsList comments={comment.replies}/>
      </div>
    </div>
      
    ))
  
}

const CommentsContainer = () => {
  return (
    <>
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentsList comments={commentsData}/>
      </div>
    </>
  );
};

export default CommentsContainer;
