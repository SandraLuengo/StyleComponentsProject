import React, { Component } from 'react';
import {Photo} from './styledPhoto';
import {HeaderPhotos} from './styledHeaderPhoto';

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
            photosLenght:7, 
            actualPhoto:null
        }
    }
    render() {
        const {className} = this.props;
        const {photosLenght, actualPhoto} = this.state;
        return (
            <div className={className}>
                <h2>Styled Component with Class State: Styled Component element</h2>
                <div className='photosContainer'>
                    {photosLenght >= 0 && Array(photosLenght).fill().map((key,i) => <HeaderPhotos id={i} actualPhoto={actualPhoto} key={`photo-${i}`} >Photo {i}</HeaderPhotos>)}
                </div>
                <div className='photosContainer'>
                    {photosLenght >= 0 && Array(photosLenght).fill().map((key,i) => <Photo onClick={()=>this.setState({actualPhoto:i})} key={`photo-${i}`} photos={photosLenght}/>)}
                </div>
                <button onClick={() => this.setState({photosLenght: this.state.photosLenght + 1})}>New Image</button>
                <button onClick={() => photosLenght > 0 && this.setState({photosLenght: this.state.photosLenght - 1})}>Delete Image</button>
            </div>
        )
    }
}
