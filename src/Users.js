import React, {PureComponent} from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const USERS_QUERY = gql`
  query userQuery {
    users @rest(type: "Users", path: "/users") {
      id
      firstName
      lastName
    }
  }
`;

class Users extends PureComponent {
  render() {
    return (
        <Query query={USERS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                data.users.map(user => (
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                ))
            );
          }}
        </Query>
    )
  }
}

export default Users;
