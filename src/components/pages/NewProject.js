import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from "react-router-dom";

const NewProject = () =>{

  const navigate = useNavigate()

  const createPost = (project) =>{

    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects/', {
      method: 'POST',
    headers: { 
      'Content-Type' : 'application/json'
      },
      body: JSON.stringify(project),
    })
    .then((resp)=>resp.json())
    .then((data)=>{
      console.log(data)
      //Redirect 
      navigate('/projects',{ state: { message: 'Projeto criado com suceso'}})
    })
    .catch((error) => console.log(error))
  }

  return (
   <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
   </div>
  )
}

export default NewProject