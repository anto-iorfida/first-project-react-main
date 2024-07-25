const CardFilm = ({title,img,director,category,time}) => {
    return (
        <>
            <div className="col-12 col-md-3">
                <div className="card bg-dark" >
                    <img src={img} className="card-img-top" alt=""style={{ 
                            height: "500px",
                            width: "100%", 
                            objectFit: "cover", 
                            objectPosition: "center" 
                        }}/>
                    <div className="card-body text-secondary">
                        <h5 className="card-title">{title}</h5>
                        <div className="card-text"><strong>Regista:</strong>{director}</div>
                        <div className="card-text"><strong>Genere:</strong>{category}</div>
                        <div className="card-text"><strong>Durata:</strong>{time}</div>
                        <a href="#" className="btn btn-warning mt-2">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export { CardFilm }