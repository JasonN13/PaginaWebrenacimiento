const Banner = () => {
return(
    <div className="container">
        {/* Logo arriba del título */}
          <div className="logo-top">
            <img src={logo} alt="Logo Renacimiento School" />
          </div>
          
          <div className="title-section">
            <h1 className="school-name">RENACIMIENTO SCHOOL</h1>
            <div className="school-subtitle">42 AÑOS DE SEGUIR TRABAJANDO</div>
            <div className="school-image">
              <img src={schoolImage} alt="Renacimiento School" />
            </div>
          </div>
    </div>
    );
};