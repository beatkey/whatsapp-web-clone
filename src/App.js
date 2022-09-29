import LeftSide from "./components/LeftSide";

function App() {
    return (
        <div className="App w-screen h-screen overflow-hidden bg-color1">
            <div
                className="Wrapper 1441:py-5 1441:w-[calc(100%-38px)] 1441:h-[calc(100%-38px)] 1441:max-w-[1600px] mx-auto shadow-[0_6px_18px_rgba(11,20,26,.05)]">
                <LeftSide/>
            </div>
        </div>
    );
}

export default App;
