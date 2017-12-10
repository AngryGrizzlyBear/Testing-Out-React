import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
class App extends Component {
constructor(){
    super();
    this.state = {
        projects: []
    }
}

componentWillMount(){
    this.setState({projects: [
        {
            title: 'Business Website',
            category: 'Webdesign'
        },
        {
            title: 'Social App',
            category: 'Mobile Development'
        },
        {
            title: 'Ecommerce Shopping Cart',
            category: 'Web development'
        }
    ]});
}

    render() {
        return ( < div className = "App" >
        <AddProject />
              <Projects projects={this.state.projects} />
            </div>
        );
    }
}

export default App;