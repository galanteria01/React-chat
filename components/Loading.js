import {Circle} from 'better-react-spinkit';

const Loading = () => {
    return (
        <div>
            <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
                <div>
                    <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" 
                    alt="" 
                    height={200}
                    style={{ marginBottom: 10 }}
                    />
                    <Circle color="#C0C0C0" size={60}/>
                </div>
            </center>
        </div>
    )
}

export default Loading
