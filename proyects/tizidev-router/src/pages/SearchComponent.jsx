import { Link } from "../funcNavigate";

/* eslint-disable react/prop-types */
export default function SearchComponent({ routeParams }) {
    return (
        <>
        <Link to='/' >Go to main page</Link>
        <h1>You searched: {routeParams?.query}</h1>
        </>
    )
}