import React from "react";
 const text = '${({ isMobile }) => isMobile && \n `background: blue;\ncolor: green;`'

const SassExplanation = ({ className }) => {
  return <div className={className}>
      <h2>Styled Component and SASS</h2>
      <h3>isMobile</h3>
      <p>Con styled-component nos ahorramos el uso del paquete ClassNames, por lo que para poder usar la variable .isMobile de redux y añadir estilos para movil en nuestro componente hacemos lo siguiente:</p>
      <pre>
          <code>
            {text} 
          </code>
      </pre>
      <h3>Imports de SASS</h3>
      <p>Para usar constantes o para importar otros css en el styled component usamos lo siguiente:</p>
      <pre>
          <code>
          {`
            const $videoColorControlsHover = '#ffffff';
          `}
          </code>
      </pre>
      <pre>
          <code>
          {`
            import "./videoPlayerDefault.scss";
          `}
          </code>
      </pre>
      <p>Si lo que importamos es un archivo de variables que necesitamos usar:</p>
      <pre>
          <code>
              {`
              import * as style from '../../../static/style/stylesVariables';

              style.variableName
              `}
          </code>
      </pre>
  </div>;
};

export default SassExplanation;
