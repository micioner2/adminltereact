
import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside = () => (
    <>
        <aside className="main-sidebar">
            <section className="sidebar">
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">MENU</li>
                    <li>
                        <NavLink exact to="/laravelreact/public" activeClassName="activo">
                                <i className="fa fa-file-text-o" /> <span>CATEGORÍA</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/laravelreact/public/producto" activeClassName="activo">
                                <i className="fa fa-book" /> <span>PRODUCTO</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <a href="#">
                            <i className="fa fa-book" /> <span>TEST</span>
                        </a>
                    </li> */}
                </ul>
            </section>
        </aside>

    </>
)

export default Aside