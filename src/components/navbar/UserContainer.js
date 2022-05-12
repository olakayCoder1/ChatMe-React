import profile from '../chat-ui.png'
import './UserContainer.css'


export default function Users(){
    return (
        <li className='user-container'>
            <img src={profile} alt='profile' width={50}/>
            <div>
                <strong className="user-username">Abnormal Blaize</strong>
                <p>Redundant alt attribute. Screen-readers already announc Redundant alt attribute.</p>
            </div>
        </li>
    )

}
                