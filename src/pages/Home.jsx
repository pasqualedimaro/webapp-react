import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">
            <section className="hero-section text-center py-5 bg-dark text-white">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold mb-4">
                        <i className="fas fa-film me-3"></i>Benvenuti in Cinevoto
                    </h1>
                    <p className="lead mb-5">
                        La piattaforma per scoprire, esplorare e recensire i migliori film
                    </p>
                    <Link to="/movies" className="btn btn-primary btn-lg px-4">
                        Esplora i film
                    </Link>
                </div>
            </section>
            <div className="container my-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-star text-warning fs-1 mb-3"></i>
                                <h3>Recensioni</h3>
                                <p>Leggi le recensioni della community e aggiungi la tua opinione</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm">
                            <div className="card-body text-center">
                                <i className="fas fa-search text-info fs-1 mb-3"></i>
                                <h3>Cerca</h3>
                                <p>Trova film per regista, genere o anno di uscita</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;