import './MessageContainer.css'
import profile from '../chat-ui.png'



export default function MessageContainer(){
    return (
        <div className='MessageContainer'>
            <img src={profile} alt='profile' />
            <div className='message'>
                <strong className=''>Blaize pascal</strong>
                <p>Redundant alt attribute. Screen-readers aRedundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt proplready announce `img` tags as an image. You don’t nezzzrop</p>
            </div>

        </div>
    )
}