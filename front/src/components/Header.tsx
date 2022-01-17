import React from "react";
import { Empty } from "../definitions";

const Header: React.VFC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a
                        className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
                        href="/"
                    >
                        <img src="img/brand.png" alt="Logo" />
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <a
                                href="/"
                                className="nav-link px-3 link-secondary"
                            >
                                Оплаквания
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link px-3 link-dark">
                                Оплачи се
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link px-3 link-dark">
                                Правила
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
