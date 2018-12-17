import React , {Component} from 'react';

class AddItems extends Component {

    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name: '',
            age: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Name" className="form-control"  id="name" required onChange={this.handleChange} value={this.state.name} />
                    <input type="number" placeholder="Enter Age" className="form-control" id="age" required onChange={this.handleChange} value={this.state.age} />
                    <input type="submit" value="add" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default AddItems;