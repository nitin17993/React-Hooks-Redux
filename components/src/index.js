import React from "react";
import ReactDOM from "react-dom";
import CommonDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommonDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommonDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I like the subject"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommonDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="I like the writing"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
