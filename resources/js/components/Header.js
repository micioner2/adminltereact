import React from 'react';

const Header = () => (
    <>
        <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini"><b>C</b>I</span>
                <span className="logo-lg"><b>Control</b> Inicial</span>
            </a>
            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown messages-menu">
                            <ul className="dropdown-menu">
                                <li className="header">You have 4 messages</li>
                                <li>
                                    <ul className="menu">
                                        <a href="#">
                                            <div className="pull-left">
                                            </div>
                                        </a>
                                    </ul>
                                </li>
                                <li className="footer"><a href="#">See All Messages</a></li>
                            </ul>
                        </li>
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img alt="Amor" className="user-image" alt="User Image" />
                                    <span className="hidden-xs">usuario</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img alt="Amor" className="img-circle" alt="User Image" />
                                        <p>
                                        <small>2019</small>
                                    </p>
                                </li>
                                <li className="user-footer">
                                    <div className="pull-right">
                                        <a href="logout" className="btn btn-default btn-flat">Salir</a>
                                    </div>
                                </li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </nav>
        </header>




    </>

)

export default Header