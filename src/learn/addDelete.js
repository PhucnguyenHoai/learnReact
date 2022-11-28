import React from "react";

class FormAction extends React.Component {
    constructor(pros) {
        super(pros);
        this.state = {
            job: '',
            salary: '',
            arrJob: [
                {id: "1", job: "dev", salary: "100"},
                {id: "2", job: "dev2", salary: "200"}
            ]
        };
    }

    handleChangeFN = (event) => {
        this.setState({
            job: event.target.value
        });
    }

    handleChangeLN = (event) => {
        this.setState({
            salary: event.target.value
        });
    }

    handleSubmit = (jobAdd) => {
        let job = {id: this.state.id, job: this.state.job, salary: this.state.salary};
        if (this.state.id === jobAdd.id) {
            this.handleEdit(jobAdd)
        } else {
            this.state.arrJob.push(job);
            this.setState({
            arrJob : [...this.state.arrJob]
        });
        }
        

        this.setState({
            job: '',
            salary: ''
        })
    }

    handleDelete = (job) => {
        let current = this.state.arrJob;
        console.log("jobid", job.id)
        console.log("itemid", current)
        current = current.filter(item => item.id !== job.id);
        this.setState({
            arrJob : current
        })
    }

    handleEdit = (jobEdit) => {
        let job = jobEdit.job;
        let salary = jobEdit.salary;
        
        this.setState({
            job: job,
            salary: salary
        })
    }

    render() {
        console.log(">>>>>>check state: ", this.state)
        return (
                <form>
                        <input type="text" value={this.state.job} onChange={this.handleChangeFN} />
                        <br />
                        <input type="text" value={this.state.salary} onChange={this.handleChangeLN} />
                        <br />
                        Name:
                    
                        {this.state.arrJob.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.job} - {item.salary} <></>
                                    <span onClick={() => this.handleSubmit(item)}>add</span> <></>
                                    <span onClick={() => this.handleDelete(item)}>x</span> <></>
                                    <span onClick={() => this.handleEdit(item)}>edit</span>
                                </div>
                            )
                        })}
                        
                        <br />
                </form>
        );
    }
}

export default FormAction;