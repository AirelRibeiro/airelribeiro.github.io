import Carousel from 'react-bootstrap/Carousel';
import '../style/Projects.css';
import 'bootstrap/dist/css/bootstrap.css';
import projects from '../helpers/projectsData';

function Projects() {
  return (
    <>
      {/* <h1 className="projects-title">Meus projetos</h1> */}
      <div className="projects">
        <Carousel className="carousel">
          {projects.map((p) => (
            <Carousel.Item interval={2500}>
              <div className="items">
                <img
                  className={p.c ? 'hammer' : 'image'}
                  src={p.icon}
                  alt={p.name}
                />

                <div className="informations">
                  <h2 className="title">{p.name}</h2>
                  <p className="project-description">{p.description}</p>
                  <div className="tecnologies-div">
                    {p.tecnologies.map((t) => (
                      <img
                        className="tecnology"
                        src={t}
                        alt="icon"
                      />
                    ))}
                  </div>
                  <a href={p.repository} target="_blank" rel="noreferrer">Acesse aqui o repositório desse projeto</a>

                </div>
              </div>
            </Carousel.Item>
          ))}

        </Carousel>
      </div>

    </>
  );
}

export default Projects;
