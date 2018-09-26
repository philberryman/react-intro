import React from 'react';

class ImageDisplay extends React.Component {

    render() {
        return (
            <li><img className="results__thumbnail" src={this.props.url} /></li>
        );
    }

}

export default ImageDisplay;