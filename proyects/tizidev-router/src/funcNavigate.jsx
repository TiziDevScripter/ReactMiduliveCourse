import { NAVIGATION_EVENT } from "./consts"
export function navigate(href) {
    window.history.pushState({}, '', href)
    const navigationEvent = new Event(NAVIGATION_EVENT.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}
// eslint-disable-next-line react/prop-types
export function Link({ children, target='_self', to, ...props }) {
    function handleNavigate(e) {
        e.preventDefault()
        navigate(to)
    }
    return <a onClick={handleNavigate} href={to} target={target} {...props}>
        {children}
    </a>
}