// import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white " aria-current="page" href="#">
          Inicio
        </a>
        <a className="nav-link text-white " href="#">
          Contáctanos
        </a>
        <a className="nav-link text-white " href="#">
          Sobre Nosotros
        </a>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;