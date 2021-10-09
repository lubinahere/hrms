import React from 'react'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='./'>Attendance</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='./admin'>Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='./dailylogs'>DailyLogs</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false" to='./leave'>Leave
                            </Link>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to='./sickleave'>SickLeave</Link></li>
                                <li><Link className="dropdown-item" to='./annualleave'>AnnualLeave</Link></li>
                                <li><Link className="dropdown-item" to='./others'>others</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='./calendar'>Calendar</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header;