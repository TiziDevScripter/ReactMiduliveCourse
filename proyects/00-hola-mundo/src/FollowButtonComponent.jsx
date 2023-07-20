import './FollowButtonComponent.css'
import { FollowButton } from './FollowButton'

export function FollowButtonComponent({children,userName,addAt,initialIsFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`
    return (
        <article className='follow-card'>
            <header className='follow-card__header'>
                <img src={imageSrc} alt='user-logo' />
            </header>
            <section className='follow-card__section'>
                <strong>{children}</strong>
                <span>{addAt(userName)}</span>
            </section>
            <aside className='follow-card__aside'>
                <FollowButton initialIsFollowing={initialIsFollowing}/>
            </aside>
        </article>
    )
}