import { Container, Nav, Navbar as NavBarBS } from "react-bootstrap";
import { NavLink as Navigator } from "react-router-dom";

//Arquivo para uma criação de uma navbar pra poder gernciar o roteamento de componentes
//com react-bootstrap

//a propriedade "to" do Nav.link significa que é o caminho da rota , quando você clicar nele 

//para cada componente do bootstrap , há uma conexão com um uma variável do react-router-dom
//o que indica que o componente tem que ter o comportamento dessa var 
const NavBar = () => {
  return (
    <NavBarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/agua" as={Navigator}>
            Agua
          </Nav.Link>

          <Nav.Link to="/contador" as={Navigator}>
            Contador
          </Nav.Link>

          <Nav.Link to="/todo" as={Navigator}>
            Todo
          </Nav.Link>

          <Nav.Link to="/troca-tema" as={Navigator}>
            Troca-tema
          </Nav.Link>
        </Nav>
      </Container>
    </NavBarBS>
  );
};

export default NavBar;
