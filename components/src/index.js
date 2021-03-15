import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {

  return (
    <div className="ui container comments">
      <CommentDetail username={Faker.internet.userName()} avatarUrl={Faker.image.image()} body={Faker.lorem.paragraph()} />
      <CommentDetail username={Faker.internet.userName()} avatarUrl={Faker.image.image()} body={Faker.lorem.paragraph()} />
      <CommentDetail username={Faker.internet.userName()} avatarUrl={Faker.image.image()} body={Faker.lorem.paragraph()} />

      <ApprovalCard>
        <CommentDetail username={'Nate'} avatarUrl={Faker.image.image()} body={Faker.lorem.paragraph()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
