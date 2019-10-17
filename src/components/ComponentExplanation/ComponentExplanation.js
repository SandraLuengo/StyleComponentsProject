import React from 'react';

const ComponentExplanation = ({className}) => {
    return(
    <div className={className}>
        <h2>Styled Component</h2>
        <h3>Simple component</h3>
        <p>Styled Component nos permite crear componentes que autocontengan sus propios estilos</p>
        <pre>
            <code>
                {
                    `
                    import styled from 'styled-components';
                    export const Button = styled.button.attrs({})'
                        border:none;
                        padding:1%;
                        margin:4px;
                        border-radius:4px;
                        font-weight: bold;
                    ';
                    `
                }
            </code>
        </pre>
        <p>De esta forma creamos  un elemento de tipo button, con unos estilos, este componente puede recibir props para variar de estilos.</p>
        <p>Utilizamos este componente como cualquier otro, lo importamos en el fichero que se quiera usar.</p> 
        <pre>
            <code>
                {
                    `
                        import {Button} from '../commons/styledButton';

                        <Button>New Image</Button>
                    `
                }
            </code>
        </pre>
        <p className='note'><span className='note__important'>Nota:</span> deberemos escribir el css entre backticks y no entre comillas simples</p>
    </div>
    );
}

export default ComponentExplanation;