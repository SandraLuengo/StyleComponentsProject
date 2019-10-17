import React from "react";

const StateExplanation = ({ className }) => {
  return (
    <div className={className}>
      <h2>Styled Component with Class State: Styled Component element</h2>
      <p>
        Si queremos que un componente cambie segun el state del componente
        padre, debemos crearnos un styled component y pasarle las variables del
        state del padre mediente property drilling
      </p>
      <p>En el siguiente fragmento tenemos un componente padre Gallery, y un componente hijo Photo, Photo recibe las variables del state como props</p> 
      <pre>
          <code>
              {`
              import React, { Component } from 'react';
              import {Photo} from './styledPhoto';
             
              
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
                          <Photo actualPhoto={actualPhoto} photos={photosLenght}/>
                          </div>
                      )
                  }
              }
              
              `}
          </code>
      </pre>
      <pre>
          <code>
              {`
                import styled from 'styled-components';
                import img from '../../media/flowers.jpg';
                
                export const Photo = styled.img.attrs({
                    src: img
                })'
                width: $'{({photos})=> calc(80% / $'{photos} - 20px)};
                height:20vh;
                margin: 10px 0;
                object-fit:contain;
                ';
              `}
          </code>
      </pre>
    </div>
  );
};

export default StateExplanation;
