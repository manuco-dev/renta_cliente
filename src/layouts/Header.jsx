export const Header = ()=>{
    return (

        <>
        <div id="page-top">
      {/* Navigation */}
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Declara
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about" className="page-scroll">
                  Declaración de Renta
                </a>
              </li>
              <li>
                <a href="#restaurant-menu" className="page-scroll">
                  Finanzas Personales
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Ayuda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Declaración de Renta</h1>
                  
                  <a href="#about" className="btn btn-custom btn-lg page-scroll">
                    Declarar con Contador
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-img">
                <img src="img/wp.png" className="img-responsive" alt="" />
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h3>Fácil</h3>
                <hr />
                <p>
                No necesitas conocimientos previos. Responde unas preguntas sencillas, 
                con ello te indicamos que documentos necesitas y paso a paso cómo conseguirlos, los 
                subes y listo!
                </p>
                <h3>Para Todos</h3>
                <p>
                Tenemos cobertura total para las personas naturales en Colombia (100% de los casos), 
                Si tienes una situación especial, también puedes elaborar tu declaración con Tributi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        </>

    )
}