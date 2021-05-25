import React from 'react';

import Form from "../components/Form/Form.js"
import Results from "../components/Results/Results.js"
import History from "../components/History/History.js"

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            history: [],
            results: {},
            url: '',
            method:''
        };
    }

    render() {
        return (
            <div>
                <Form />
                <History />
                 <Results />
            </div>
        )

    }
}

export default Home