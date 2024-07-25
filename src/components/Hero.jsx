const Hero = () => {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide border-0" data-bs-ride="carousel">
                <div className="carousel-inner  border-0" >
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        style={{height:"400px",width:"100%",objectFit:"cover"}} alt="img-1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://media.istockphoto.com/id/182886331/it/foto/pila-di-pop-corn-cinema.jpg?s=2048x2048&w=is&k=20&c=pXu5LmyFLobqa-OTg4exw4ykqls9VEXtdAXv7LNZ-Bw="
                         style={{height:"400px",width:"100%",objectFit:"cover"}} alt="img-2"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                         style={{height:"400px",width:"100%",objectFit:"cover"}} alt="img-3"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export { Hero }