import React, { Component } from 'react';
import {Photo} from './styledPhoto';
import {HeaderPhotos} from './styledHeaderPhoto';
import {Button} from '../commons/styledButton';

export default class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
            photosLenght:7, 
            actualPhoto:null
        }
    }

    incrementImg() {
        this.setState({photosLenght: this.state.photosLenght + 1})
    }

    decrementImg(photosLenght) {
        photosLenght > 0 && this.setState({photosLenght: this.state.photosLenght - 1})
    }

    setIndexPhoto(i) {
        this.setState({actualPhoto:i})
    }

    render() {
        const {className} = this.props;
        const {photosLenght, actualPhoto} = this.state;
        return (
            <div className={className}>
                <h2>Styled Component with Class State: Styled Component element</h2>
                <div className='photosContainer'>
                    {photosLenght >= 0 && Array(photosLenght).fill().map((key,i) => {
                        return <HeaderPhotos id={i} actualPhoto={actualPhoto} key={`text${i}`} >Photo {i}</HeaderPhotos>
                    })}
                </div>
                <div className='photosContainer'>
                    {photosLenght >= 0 && Array(photosLenght).fill().map((key,i) =>{
                        return <Photo onClick={()=>this.setIndexPhoto(i)} id={i} actualPhoto={actualPhoto} key={`photo${i}`} photos={photosLenght}/>
                    })}
                </div>
                <Button onClick={() => this.incrementImg(photosLenght)} color={'red'}>New Image</Button>
                <Button onClick={() => this.decrementImg(photosLenght)} color={'pink'}>Delete Image</Button>
            </div>
        )
    }
}
