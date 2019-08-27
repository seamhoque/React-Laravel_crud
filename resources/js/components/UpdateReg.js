import React, {Component} from 'react';
import MyGlobleSetting from './MyGlobleSetting';
import axios from 'axios';

class UpdateReg extends Component {

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

        /*console.log(this.state);*/
        const regs = {
            name: this.state.name,
            position: this.state.position,
            location: this.state.location,
            salary: this.state.salary,
        };

        // console.log(reg);
        let uri = MyGlobleSetting.url + '/api/regs/'+this.props.match.params.id;
        axios.patch(uri, regs).then((response) => {
            console.log(response);
        });
    }

    componentDidMount(){

        /*console.log(this.props.match.params.id);*/
        axios.get(MyGlobleSetting.url + `/api/regs/${this.props.match.params.id}/edit`)
            .then(response => {
                this.setState({

                    name: response.data.name,
                    position: response.data.position,
                    location: response.data.location,
                    salary: response.data.salary
                });

                /*console.log(this.state);*/
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (
            <div>
                <h1>Update Product</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>User Name :</label>
                                <input type="text" value={this.state.name} className="form-control" onChange={this.handleChange1} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Position :</label>
                                <input type="text" value={this.state.position} className="form-control" onChange={this.handleChange2} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Location :</label>
                                <input type="text"  value={this.state.location} className="form-control" onChange={this.handleChange3} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Salary :</label>
                                <input type="number" value={this.state.salary} className="form-control" onChange={this.handleChange4} />
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

export default UpdateReg;
