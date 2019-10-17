import React from 'react';

const ReduxExplanation = ({className}) => {
    return (
        <div className={className}>
            <h2>Styled Component con Redux</h2>
            <h3>Container, Styled, Component</h3>
            <p>Podemos definir los estilos de un componente segun el state de redux, de esta forma los estilos son dinamicos ya que cambian conforme cambia el state.</p>
            <p>Los valores de las variables del state de redux llegan al styled-component mediante props</p>
            <p>Para que las props llegen al fichero js donde aplicamos los estilos vamos a seguir la siguente estructura: </p>
            <p><span className='important'>Component.container.js:</span> en el container importamos redux y definimos las constantes de los reducer y actions, tambien importamos el Component.styled.js al que queremos que llegen esas props, de esta forma Component.container.js envuelve a Component.styled.js</p>
            <pre>
                <code>
                    {`
                    import { connect } from "react-redux";
                    import Component from "./Component.styled";
                    import { action } from "../../redux/actions/reduxAction";

                    const mapStateToProps = state => ({
                        value: state.reducer.value
                    });

                    const mapDispatchToProps = dispatch => ({
                        action: () => dispatch(action()),
                    });

                    export default connect(
                    mapStateToProps,
                    mapDispatchToProps
                    )(Component);
                    `}
                </code>
            </pre>
            <p><span className='important'>Component.styled.js:</span> contiene los estilos que se aplicaran a nuestro componente, y por lo tanto envuelve a Component.component.js devolviendonos un componente con estilos y con redux</p>
            <pre>
                <code>
                    {
                    `
                    import styled from 'styled-components';
                    import Component from './Component.component';
                    
                    export default styled(Component).attrs({})' 
                    
                        Aqui aplicamos los estilos, css, sass ...

                    ';`
                    
                    }
                </code>
            </pre>
            <p><span className='important'>Component.component.js</span> contiene el codigo de nuestro componente</p>
            <pre>
                <code>
                    {`
                    import React from 'react';

                    const Counter = ({className}) => {
                        return(
                        <div className={className}></div>
                        )
                    }
                    
                    export default Counter;

                    `}
                </code>
            </pre>
            <h3>Styled, Component</h3>
            <p>Si no queremos montar esta estructura (container > styled > component) pero queremos poder acceder a las variables de redux desde el styled-component, podemos crear un componente normal, y luego en el fichero component.styled.js importar redux</p>
            <p><span className='important'>Component.js</span></p>
            <pre>
                <code>
                    {`
                    import React, {Component} from 'react';
                    import { connect } from 'react-redux';
                    import { bindActionCreators } from 'redux';

                    import  * as actions from 'redux/modules/actionsFile';

                    const mapStateToProps = (state) => ({ value:   state.reducer.value });
                    const mapDispatchToProps = (dispatch) => bindActionCreators( actions , dispatch);

                    const Component = ({className}) => {
                        return(
                        <div className={className}></div>
                        )
                    }
                    
                    export default connect(
                        mapStateToProps,
                        mapDispatchToProps
                    )(Component);

                    `}
                </code>
            </pre>
            <p><span className='important'>Component.styled.js</span></p>
            <pre>
                <code>
                    {`
                    import styled from "styled-components";
                    import Instructions from "./Instructions";
                    import { connect } from 'react-redux';
                    
                    
                    const mapStateToProps = (state) => ({
                        positionScroll:   state.scroll.positionScroll
                    });
                    
                    
                    export default connect(mapStateToProps)(styled(Instructions).attrs({})''

                    `}
                </code>
            </pre>
            <h3>Ejemplo de cambio de estilos con redux</h3>
        </div>
    )
}

export default ReduxExplanation;