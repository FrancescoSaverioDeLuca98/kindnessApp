import { useRouter } from 'next/router'
import Profile from '../../components/UserProfile'


export default function ProfileFromId() {
    const router = useRouter()
    let id = router.query.profileid

    return (
        <Profile>
             <div> User id : {id}</div>
        </Profile>
    )
}