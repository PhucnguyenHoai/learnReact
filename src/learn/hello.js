import React from "react";
import { connect } from "react-redux";

class Hello extends React.Component {

    handleDelete = (user) => {
        console.log(">>>delete reducer: ")
        this.props.deleteUserDelete(user);
    }

    handleAdd = () => {
        console.log(">>>add reducer: ")
        this.props.addUser();
    }

    render() {
        console.log(">>>check props: ", this.props.reduxUser)
        let users = this.props.reduxUser
        return (
            <>
                <div>
                    <h1>Hello </h1>
                </div>
                {users && users.length > 0 &&
                    users.map((item, index) => {
                        return (
                            <div key={index + 1}>
                                {index + 1} - {item.name}
                                <span onClick={() => this.handleDelete(item)}> x</span>
                                <span onClick={() => this.handleAdd()}> +</span>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reduxUser: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserDelete: (userDelete) => dispatch({type: "DELETE_USER", payload: userDelete}),
        addUser: () => dispatch({type: "ADD_USER"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello)