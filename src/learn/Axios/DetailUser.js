import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        detailUser: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            // kiểu Promise
            await axios.get(`https://reqres.in/api/users/${id}`)
                .then(
                    (result) => {
                        this.setState({
                            detailUser: result.data.data
                        })
                    },
                    (error) => console.log(error)
                )

        }

    }

    handleBackListUser = () => {
        this.props.history.push("/axios")
    }

    render() {
        let { detailUser } = this.state;
        let isEmtyObject = Object.keys(detailUser).length === 0;
        console.log(">>>>check detail user: ", detailUser);

        return (
            <div>
                {isEmtyObject === false &&
                    <>
                        <h1>Detail User: {this.props.match.params.id}</h1>
                        <h2>{detailUser.first_name} {detailUser.last_name}</h2>
                        <h2>{detailUser.email}</h2>
                        <img src={detailUser.avatar} alt="avatar"></img>
                        <br />
                        <input type="button" value="Back" onClick={() => this.handleBackListUser()} />
                    </>
                }
            </div>
        )
    }
}

export default withRouter(DetailUser);