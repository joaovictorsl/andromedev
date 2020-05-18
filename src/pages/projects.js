import React from "react"
import Container from '../components/container';
import Project from '../components/project';

import styles from '../styles/projects.module.css';


const ProjectsPage = () => {
  let projects = [{'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'},
                  {'name': 'Laguinho1', 'description': 'Projeto laguinho', 'org': 'OpendevUFCG'}]

  let elements = []

  for(let i = 0; i < projects.length; i++){
    elements.push(<Project info={ projects[i] }  key={i}/>)
  }

  return (
  <Container>
    <div className={ `${styles.projects} ${styles.flex}`}>
      <div className={ `${styles.title} ${styles.flex}` }>
        <h2>Projetos</h2>
        {/* <p>Lista de projetos do Andromedev</p> */}
      </div>
      <div className={ `${styles.projectsList}` }>
          { elements }
      </div>
    </div>
  </Container>
  )
}
export default ProjectsPage
