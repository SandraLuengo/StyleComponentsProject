import React, { Component } from 'react';
import {Photo} from './styled';

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
            photosLenght:5
        }
    }
    render() {
        const {className} = this.props;
        const {photosLenght} = this.state;
        console.log(this.state)
        return (
            <div className={className}>
                <h2>Styled Component with Class State: Styled Component element</h2>
                <div className='photosContainer'>
                    {Array(photosLenght).fill().map(() => <Photo photos={photosLenght}/>)}
                </div>
                <button onClick={() => this.setState({photosLenght: this.state.photosLenght + 1})}>New Image</button>
                <button onClick={() => this.setState({photosLenght: this.state.photosLenght - 1})}>Delete Image</button>
            </div>
        )
    }
}
