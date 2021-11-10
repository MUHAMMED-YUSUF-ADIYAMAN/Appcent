import React from 'react';

const Nav = () =>{
        return (
            <>

                <nav className="navbar navbar-dark ">
                    <div className="container-fluid d-flex justify-content-around">
                        <a className="navbar-brand" href="#">
                            <img src="img/logo512.png" alt="" width="30" height="24"/>
                            MYA Movies
                        </a>
                        <button className="navbar-toggler  " type="button" style={{width: "200px;",color: "white"}} data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span>MENU</span>
                        </button>
                    </div>
                </nav>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="p-4">
                        <h5 className="text-white h4">Collapsed content</h5>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
            {/*    <div className="collapse" id="navbarToggleExternalContent">*/}
            {/*        <div className="bg-dark p-4">*/}
            {/*            <h5 className="text-white h4">Collapsed content</h5>*/}
            {/*            <span className="text-muted">Toggleable via the navbar brand.</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <nav className="navbar navbar-light " >*/}
            {/*        <div className="container">*/}
            {/*            <a className="navbar-brand" href="#">*/}
            {/*                <img src="img/logo512.png" alt="" width="30" height="24"/>*/}
            {/*                MYA Movies*/}
            {/*            </a>*/}
            {/*            <button className="navbar-toggler" type="button" style={{width: "200px"}} data-bs-toggle="collapse"*/}
            {/*                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"*/}
            {/*                    aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*                <span >MENU</span>*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            </>

        );
}

export default Nav;