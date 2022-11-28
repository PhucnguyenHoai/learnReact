import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class UserList extends React.Component {

    state = {
        listUser: []
    }

    async componentDidMount() {
        // kiểu async/await
        let res = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            listUser: res.data.data
        })
    }

    handleClickDetail = (user) => {
        this.props.history.push(`/axios/${user.id}`)
    }

    render() {
        console.log(">>>check axios list user: ", this.state);
        let { listUser } = this.state;
        return (
            <table align="center" border={1}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Detail</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((user, index) =>
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <input type="button" value="Detail" onClick={() => this.handleClickDetail(user)} />
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }
}

export default withRouter(UserList);