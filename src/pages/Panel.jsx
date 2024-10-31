import { Link, Outlet } from "react-router-dom";
import './Panel.css';

const Panel = () => {
  return (
    <main className="dashboard">
      <header className="encabezado">
        <div className="buttons-container">
          <Link className='enlace' to="/Login">Cerrar Sesión</Link>
        </div>
      </header>
      <section className="panel-content">
        <span className="glass"></span>
        <h2>Este es el panel principal</h2>
        <Outlet />
      </section>
    </main>
  );
};

export default Panel;
