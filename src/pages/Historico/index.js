
function Historico(){
    return(
        <div class="mainPage">
        <div class="head">
            <div id="seta">
                <Link to="/main" state={location.state}><img src="resources/seta-esquerda_2.png"/></Link>
            </div>
            <h1>Historico</h1>
        </div>
        <div class="tabela">
            <div className="resultados">
                
            </div>
        </div>
    </div>
    )
}