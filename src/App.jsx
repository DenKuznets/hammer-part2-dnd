import styled from "styled-components";
import Floor from "./components/Floor";
import ItemsPool from "./components/ItemsPool";
import useItemsStateStore from "./store/useItemsStateStore";

const Container = styled.div`
    display: flex;
    justify-content: center;
    .items,
    .floor {
        /* flex: 1; */
        flex-basis: 50%;
    }
`;

const App = () => {
    const squares = useItemsStateStore((state) => state.squares);
    const loadSquares = useItemsStateStore((state) => state.loadSquares);
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
                loadSquares(loadedSquares);
            };
        };
        input.click();
    }

    return (
        <>
            <header>
                <button onClick={saveToFile}>Сохранить в файл</button>
                <button onClick={loadFromFile}>Загрузить из файла</button>
            </header>
            <Container>
                <div className="items">
                    <ItemsPool />
                </div>
                <div className="floor">
                    <Floor />
                </div>
            </Container>
        </>
    );
};

export default App;
