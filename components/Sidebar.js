import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components"
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {

    const createChat = () => {
        const input = prompt('Enter the email for user you wish to chat with');
        if(!input) return null;
        if(EmailValidator.validate(input)) {
            // TODO:Add the chat
        }

    }

    return (
        <Container>
            <Header>
                <UserAvatar />
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