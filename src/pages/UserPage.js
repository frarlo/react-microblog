import { useParams } from 'react-router-dom';
import Body from '../components/Body';


export default function UserPage() {
    const { username } = useParams();

    return (
        <Body sidebar>
            <h1>Hi, {username}</h1>
            <p><i>TODO</i></p>
        </Body>
    );
}