import React from "react";
import { Empty } from "../definitions";

const Head: React.VFC = (
    _props: Empty,
    _context?: unknown
): React.ReactElement => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a
                    className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
                    href="/"
                >
                    <img src="img/brand.png" alt="Logo" />
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li>
                        <a
                            href="/"
                            className="nav-link px-2 link-secondary text-uppercase"
                        >
                            Оплаквания
                        </a>
                    </li>
                    <li>
                        <a
                            href="/rules"
                            className="nav-link px-2 link-secondary  text-uppercase"
                        >
                            Правила
                        </a>
                    </li>
                </ul>

                <div className="col-md-3 text-end"></div>
            </header>
        </div>
    );
};

export default Head;
