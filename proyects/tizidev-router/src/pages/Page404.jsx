import { Link } from "../funcNavigate";

export function Page404() {
    return (
        <>
        <h1>Error: 404</h1>
        <p>Page not found.</p>
        <img src="https://media0.giphy.com/media/kjtYLgRn9DC4nenpBM/giphy.gif?cid=ecf05e473mpm3xx7ktzwnezavnfb1vye0yb5x405dldowmtb&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="404 error - box floating on the ocean"/>
        <br />
        <Link to='/'>Go back home</Link>
        </>
    )
}