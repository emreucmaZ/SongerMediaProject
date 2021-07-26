import React from 'react'
import posed from 'react-pose'


const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: null,
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
})
export default class AddUser extends React.Component {
    state = {
        visible: false,
        name: "",
        department: "",
        salary: ""
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addUser = (e) => {
        e.preventDefault()
        console.log("test")
        const {name,department,salary} = this.state

        const newUser = {
            name:name,
            salary:salary,
            department:department
        }
        console.log(newUser)
    }

    render() {
        const { visible, name, department, salary } = this.state;
        return (
            <div className="col-md-8 mb-4">

                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                <Animation pose={visible ? "visible" : "hidden"}>

                    <div className="card">
                        <div className="card-header">
                            <h4>Add User Form</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.AddUser}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="id"
                                        placeholder="Enter Name"
                                        className="form-control"
                                        value={name}
                                        onChange={this.changeInput}


                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <input
                                        type="text"
                                        name="department"
                                        id="department"
                                        placeholder="Enter Department"
                                        className="form-control"
                                        value={department}
                                        onChange={this.changeInput}

                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salary">Salary</label>
                                    <input
                                        type="text"
                                        name="salary"
                                        id="salary"
                                        placeholder="Enter Salary"
                                        className="form-control"
                                        value={salary}
                                        onChange={this.changeInput}

                                    />
                                </div>
                                <button className="btn btn-danger btn-block" type="submit">Add User</button>

                            </form>
                        </div>

                    </div>

                </Animation>

            </div>
        )
    }
}