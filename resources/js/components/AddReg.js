import React, {Component} from 'react';
import MyGlobleSetting from './MyGlobleSetting';
import axios from 'axios';

class AddReg extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            location:'',
            position:'',
            salary:''
        };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e){
        this.setState({
            name: e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            position: e.target.value
        })
    }
    handleChange3(e){
        this.setState({
            location: e.target.value
        })
    }
    handleChange4(e){
        this.setState({
            salary: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const regs = {
            name: this.state.name,
            position: this.state.position,
            location: this.state.location,
            salary: this.state.salary,
        }

       // console.log(reg);
        let uri = MyGlobleSetting.url + '/api/regs';
        axios.post(uri, regs).then((response) => {
            console.log(response);
        });
    }

    render() {
        return (

                <div>
                    <h1>Create User</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>User Name :</label>
                                    <input type="text" className="form-control" onChange={this.handleChange1} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Position :</label>
                                    <input type="text" className="form-control" onChange={this.handleChange2} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Location :</label>
                                    <input type="text" className="form-control" onChange={this.handleChange3} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Salary :</label>
                                    <input type="number" className="form-control" onChange={this.handleChange4} />
                                </div>
                            </div>
                        </div>


                        <br />
                        <div className="form-group">
                            <button className="btn btn-primary">Add User</button>
                        </div>
                    </form>
                </div>
        );
    }
}

export default AddReg;
