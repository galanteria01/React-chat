import "./styles.css";
import Login from "./files/Login";
import { ChatEngine } from 'react-chat-engine'


export default function App() {
  return (
    <div className="App">
      <ChatEngine
			height='100vh'
			userName='Shoury'
			userSecret='baatcheet'
			projectID='30413a6f-5cf7-4635-ab12-748617ce371c'
		/>
    </div>
  );
}
