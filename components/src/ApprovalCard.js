import React from 'react';

const ApprovalCard = props => {
  console.log(props);
  return (
    <div className="ui card">
      <div className="content">
      </div>
      <div className="extra content">
        <div class="ui two buttons">
          <div class="ui basic green button">Approve</div>
          <div class="ui basic red button">Decline</div>
        </div>
      </div>
      {props.children}
    </div>
  );
}

export default ApprovalCard;
