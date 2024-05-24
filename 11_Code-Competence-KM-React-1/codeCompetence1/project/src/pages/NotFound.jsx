import { Link } from 'react-router-dom';
export default function NotFoundP () {
    return (
        <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <Link className="btn btn-primary" to="/">Home</Link>
                </div>
            </div>
        </div>
        </>

    )
}