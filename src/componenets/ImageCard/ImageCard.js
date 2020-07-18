import React, { createRef } from 'react';

export default class ImageCard extends React.Component {
    state = {
        spans: 0
    }
    constructor(props) {
        super(props);
        this.imageRef = createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);

        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);
        this.setState({spans})
    }

    render() {
        const { urls, alt_description } = this.props.Image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}> 
                <img ref={this.imageRef} src={urls.regular} alt={alt_description} ></img>
            </div>
        )
    }
}