import { CardFilm } from "./CardFilm";

const ListFilm = () => {

    // array di img 

    const movies = [
        // film in programmazione 
        { id: 1, category: "All Movies", title: "Deadpool & Wolverine", director: "Christopher Nolan", time: "148 min", image: "../public/img/Deadpool.jpg" , IsProgrammed:true},
        { id: 2, category: "Drama", title: "Inside Out 2", director: "Frank Darabont", time: "142 min", image: "../public/img/inside-out-2.jpg" , IsProgrammed:true},
        { id: 3, category: "Action", title: "Twisters", director: "George Miller", time: "120 min", image: "../public/img/twister.jpg" , IsProgrammed:true},
        { id: 4, category: "Comedy", title: "Spider-Man 2", director: "Wes Anderson", time: "99 min", image: "../public/img/spiderman-2.jpeg" , IsProgrammed:true},
        //    film fuori programmazione 
        { id: 5, category: "Sci-Fi", title: "Fury", director: "Denis Villeneuve", time: "164 min", image: "../public/img/fury.jpeg" , IsProgrammed:false},
        { id: 6, category: "Animation", title: "Lone Survivor", director: "Luna Nova", time: "87 min", image: "../public/img/lone.jpg" ,IsProgrammed:false},
        { id: 7, category: "Thriller", title: "Uncharted", director: "Marina del Rio", time: "110 min", image: "../public/img/uncharted.jpeg",IsProgrammed:false },
        { id: 8, category: "Documentary", title: "Senza Rimorso", director: "Avian Collective", time: "95 min", image: "../public/img/senza-rimorso.jpeg",IsProgrammed:false },
        // { id: 9, category: "Musical", title: "Harmonic City", director: "Melody Wright", time: "132 min", image: "harmoniccity.jpg" },
        // { id: 10, category: "Romance", title: "Under the Tuscan Sunsets", director: "Isabella Rossi", time: "108 min", image: "tuscansunsets.jpg" },
        // { id: 11, category: "Fantasy", title: "Whispering Willows", director: "Enchanted Studios", time: "150 min", image: "whisperingwillows.jpg" },
        // { id: 12, category: "Historical", title: "The Samurai's Code", director: "Katsuro Hiro", time: "125 min", image: "samuraicode.jpg" },
        // { id: 13, category: "War", title: "Wings of Freedom", director: "Peter Skyes", time: "172 min", image: "wingsoffreedom.jpg" },
        // { id: 14, category: "Mystery", title: "The Vanishing Act", director: "Enigma Films", time: "102 min", image: "vanishingact.jpg" },
        // { id: 15, category: "Sports", title: "The Climb: Everest", director: "Peak Productions", time: "118 min", image: "everestclimb.jpg" },
        // { id: 16, category: "Family", title: "Jungle Quest", director: "Adventure Studios", time: "90 min", image: "junglequest.jpg" },
        // { id: 17, category: "Crime", title: "The Night Watch", director: "Noir Films", time: "135 min", image: "nightwatch.jpg" },
        // { id: 18, category: "Foreign", title: "Le Voyage en Train (The Train Journey)", director: "Pierre Dupont", time: "100 min", image: "letrainjourney.jpg" },
        // { id: 19, category: "Independent", title: "Echoes of Yesterday", director: "Rising Star Films", time: "82 min", image: "echoesofyesterday.jpg" },
        // { id: 20, category: "Superhero", title: "Nova: Guardian of the Cosmos", director: "Cosmic Studios", time: "140 min", image: "novaguard.jpg" }
    ];

    return (
        <>
            <section className="bg-black pt-4">
                <div className="container">
                    <h1 className="text-warning text-center mb-4">Film in programmazione</h1>
                    <div className="row gy-4">
                        {movies
                        .filter((film) => film.IsProgrammed)
                        .map((film) => (
                            <CardFilm
                                key={film.id}
                                title={film.title}
                                img={film.image}
                                time={film.time}
                                category={film.category}
                                director={film.director}
                            ></CardFilm>
                        ))
                        }
                    </div>
                </div>

                <div className="container">
                    <h1 className="text-warning text-center mb-4">Film in Scadenza</h1>
                    <div className="row gy-4">
                        {movies
                        .filter((film) => !film.IsProgrammed)
                        .map((film) => (
                            <CardFilm
                                key={film.id}
                                title={film.title}
                                img={film.image}
                                time={film.time}
                                category={film.category}
                                director={film.director}
                            ></CardFilm>
                        ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export { ListFilm }