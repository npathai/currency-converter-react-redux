import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configureStore'
import {Provider} from 'react-redux'

import Conversion from './containers/Conversion'

class MainComponent extends React.Component {

    render() {
        return (
            <div>
                <Conversion testProperty="test value"/>
            </div>
        )
    }
}


ReactDOM.render(<Provider store={store}><MainComponent /></Provider>, document.getElementById('container'));
