import Search from "./Search"
import UsersList from "./UsersList"
import './LeftSide.css'
import Add from "./Add"



export default function LeftSide(){
    return (
        <div className="LeftSide">
            <Search />
            <UsersList />
            <Add />
        </div>
    )
}