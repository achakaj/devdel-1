{/*import React, {Component} from "react";
import List from "./List";

class Myformm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value:''};
        this.state = {evalue:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.setState({evalue: this.state.value})
      }

      render (){
        return(
            <div>
                <h1 className="text-7xl my-8 text-blue-500">To Do List</h1>
                <form>
                <input className="shadow my-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="todo" name="todo" type="text" placeholder="To Do" value={this.state.value} onChange={this.handleChange}/>
                <div className="flex space-x-4">
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" name="date" type="date" placeholder="Expire in..."/> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={this.handleSubmit}>OK</button>
                </div>
                <List value={this.state.evalue}/>
                </form>
            </div>
        );
      }  
}

export default Myformm;*/}