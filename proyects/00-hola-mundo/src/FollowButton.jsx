import {useState} from 'react';
import './FollowButton.css'

export function FollowButton({initialIsFollowing=false}) {
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

    let text = isFollowing ? 'Following' : 'Follow';
    let textClass = isFollowing ? 'button button--following' : 'button'
    return (
        <button 
        className={textClass}
        onClick={()=>{setIsFollowing(!isFollowing)}}
        >
            <span className='principal'>{text}</span>
            <span className='secondary'>Unfollow</span>
        </button>
    )
}