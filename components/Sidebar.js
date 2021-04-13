import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { auth, database } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import EmailValidator from 'email-validator';
import Chat from "./Chat";


const Sidebar = () => {
    const [user] = useAuthState(auth);
    const userChatRef = database.collection('chats').where("users", "array-contains", user.email);
    const [chatsSnapshot] = useCollection(userChatRef);

    const createChat = () => {
        const input = prompt('Enter the email for user you wish to chat with');
        if(!input) return null;
        if(EmailValidator.validate(input) && input !== user.email && !chatAlreadyExists(input)) {
            database.collection('chats').add({
                user: [user.email,input]
            })
        }

    }

    const chatAlreadyExists =(recipientEmail) =>  !!chatsSnapshot?.docs.find(chat => chat.data().users.find(user => user === recipientEmail)?.length > 0);
    

    return (
        <Container>
            <Header>
                <UserAvatar onClick={() => {auth.signOut()}} />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search >
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </Search>
            <SidebarButton onClick={createChat}>Start a new chat</SidebarButton >
            {chatsSnapshot?.docs.map((chat) => (
                <Chat key={chat.id} id={chat.id} user={chat.data().users} /> 
            ))}
        </Container>
    )
}

export default Sidebar

const SidebarButton = styled(Button)`
    width: 100%;
    &&&{
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
    
`;

const Container = styled.div``;

const Header = styled.div`
    display:flex;
    position: sticky;
    top: 0;
    background-color:white;
    z-index:1;
    justify-content:space-between;
    align-items:center;
    padding: 15px;
    height:80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8
    }
`;

const IconsContainer = styled.div``;

const Search = styled.div`
    display:flex;
    align-items:center;
    padding: 5px;
    border-radius: 20px;

`;

const SearchInput =  styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`;