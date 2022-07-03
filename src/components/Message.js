import React from "react";

function Message(props) {
  return (
    <div className="outerdiv">
      <div className="innerdiv">
        <p className="desc">Send me anonymous messages!</p>
      </div>

      <input type="text" placeholder="Type somthing..." className="inputbox" />
      <button type="submit" className="btn"><h1 className="send">Send</h1></button>
      
    </div>
    
  );
}

export default Message;
