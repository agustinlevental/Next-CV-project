import React from 'react';

const Experience = () => {
  return (
    <div style={{width:"100%"}}>
      <h2 style={{
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "2em",
    marginBottom: "16px",
  }}>Experiencia Profesional</h2>
      <div>
        <h3>05/2022 - Developer - Diveria</h3>
        <ul>
          <li>
            <strong>Eclipz:</strong> trabajé como desarrollador frontend en un proyecto de EE. UU. utilizando React, Material-UI, CSS, SCSS, Redux (slices) y Regraph (biblioteca de diseño). Hablaba en inglés para las reuniones diarias y las demostraciones.
            <br />
            <em>Referencia:</em> Gabriel, líder de proyecto del lado de Diveria SRL: 3424 21-9707
          </li>
          <li>
            <strong>CHRobinson:</strong> Trabajé como único desarrollador de frontend utilizando React, Typescript, SCSS, Material-UI y Mobx para los estados globales.
            <br />
            <em>Referencia:</em> Mateo, líder de Front end: +54 3513162076
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
