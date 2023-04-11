import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuList() {
  return (
    <>
      <Menu key={1} href="Dashboard" icon="fas fa-th" />
      <Menu key={2} href="Testpage" icon="fa fa-chart-bar" />
      <Menu key={3} href="PatientsTable" icon="fas fa-user-friends" />
    </>
  );
}

function Menu({ href, icon }) {
  return (
    <div className="navbar-nav w-100">
      <Link to={`/${href.toLowerCase()}`} className="nav-item nav-link">
        <i className={`${icon} me-2`} />
        {href}
      </Link>
    </div>
  );
}

export default MenuList;
