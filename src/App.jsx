import styled from "styled-components";
import Floor from "./components/Floor";
import ItemsPool from "./components/ItemsPool";
import { useDispatch, useSelector } from "react-redux";
import { loadSquares } from "./features/appSlice";
import "@fontsource/public-sans";
import { Alert, Button, ButtonGroup } from "@mui/joy";

const Header = styled.header`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    .left-side,
    .floor {
        /* flex: 1; */
        flex-basis: 50%;
    }
    .description {
        background: #fff;
        padding: 10px;
    }
    .left-side {
        padding-right: 20px;
    }
`;

const App = () => {
    const squares = useSelector((state) => state.app.squares);
    const dispatch = useDispatch();

    function saveToFile() {
        let json = JSON.stringify(squares);
        const file = new Blob([json], { type: "text/plain" });
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = "position" + Date.now() + ".txt";
        element.click();
        setTimeout(() => {
            element.remove();
        }, 1);
    }

    function loadFromFile() {
        let input = document.createElement("input");
        input.type = "file";
        input.onchange = (e) => {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = (readerEvent) => {
                let content = readerEvent.target.result;
                let loadedSquares = JSON.parse(content);
                dispatch(loadSquares(loadedSquares));
            };
        };
        input.click();
    }

    return (
        <>
            <Header>
                <ButtonGroup color="info" variant="solid">
                    <Button onClick={saveToFile}>Save</Button>
                    <Button onClick={loadFromFile}>Load</Button>
                </ButtonGroup>
            </Header>
            <Container>
                <div className="left-side">
                    <div className="items">
                        <ItemsPool />
                    </div>
                    <Alert>
                        Simple dnd with react <br />
                        Furniture can be dragged onto orange floor tiles. <br />{" "}
                        The red elements of the floor mean occupied places,
                        can't drag onto them.
                    </Alert>
                </div>
                <div className="floor">
                    <Floor />
                </div>
            </Container>
        </>
    );
};

export default App;
