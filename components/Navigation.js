import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  let content =
    <div>
      <Navbar bg="dark" variant="dark" expand='md' className={styles.content}>
        <Navbar.Brand className={styles.brand}>Cliff</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
            <Nav.Link href="/latest" className={styles.link}>Latest</Nav.Link>
            <Nav.Link href="/projects" className={styles.link}>Projects</Nav.Link>
            <Nav.Link href="/about" className={styles.link}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>;

  return content;
}
