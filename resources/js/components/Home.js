import React, {Component} from 'react';
import axios from 'axios';
import MyGlobleSetting from './MyGlobleSetting';
import {Link} from 'react-router-dom';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            regs: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);


    }
        componentDidMount(){
            axios.get(MyGlobleSetting.url + '/api/regs')
                .then(response => {
                    this.setState({ regs: response.data })
                    console.log(this.state.regs);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        handleSubmit(e){
            /*console.log(e.target.value);*/
            let uri = MyGlobleSetting.url + `/api/regs/${e.target.value}`;
            axios.delete(uri).then(response =>{
                console.log(response);
            });

        }





    render() {
        return (
            <div>

                <table className="table table-hover">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Position</td>
                        <td>Location</td>
                        <td>Salary</td>
                        <td width="200px">Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    {

                        this.state.regs.map(reg =>{
                            return(
                                <tr>
                                    <td>{reg.id}</td>
                                    <td>{reg.name}</td>
                                    <td>{reg.position}</td>
                                    <td>{reg.location}</td>
                                    <td>{reg.salary}</td>


                                        <Link to={"edit/"+reg.id} className="btn btn-primary">Edit</Link>
                                        &ensp;

                                        <button onClick={this.handleSubmit} value={reg.id} className="btn btn-danger"> Delete</button>







                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }

}

export default Home;

