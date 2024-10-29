//Settings
import { useLoginContext } from "../context/useLoginContext"
export const Settings = () => {
    const {loggedIn } = useLoginContext()
    return (
        <div className='pageLayout'>
            <div>
                <h3>Settings</h3>
            </div>
            {loggedIn &&
                    <div><h3>User is Logged in</h3></div>
                }
            <div>
            </div>
        </div>
    )
}
