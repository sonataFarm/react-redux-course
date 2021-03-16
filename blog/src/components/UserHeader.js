import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

    if (!this.props.user) {
      return null;
    }

    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => { return { user: state.users.find(u => u.id === ownProps.id) }; };
export default connect(mapStateToProps)(UserHeader);
