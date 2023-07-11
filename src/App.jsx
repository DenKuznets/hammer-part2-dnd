import styled from "styled-components";
import Floor from "./components/Floor";
import ItemsPool from "./components/ItemsPool";
import { useDispatch, useSelector } from "react-redux";
import { loadSquares } from "./features/appSlice";
import "@fontsource/public-sans";
import { Alert, Button, ButtonGroup } from "@mui/joy";

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
            <header>
                <ButtonGroup color="info" variant="solid">
                    <Button onClick={saveToFile}>Сохранить в файл</Button>
                    <Button onClick={loadFromFile}>Загрузить из файла</Button>
                </ButtonGroup>
            </header>
            <Container>
                <div className="left-side">
                    <div className="items">
                        <ItemsPool />
                    </div>
                    <Alert>
                        Простой драг н дроп на реакте. <br />
                        Картинки с предметами мебели можно перетаскивать вправо
                        на оранжевые элементы пола. <br /> Красные элементы пола
                        означают занятые места, на них перетаскивать нельзя.{" "}
                        <br /> Кнопка сохранить в файл - сохраняет текущее
                        расположение мебели. <br /> Кнопка загрузить -
                        восстанавливает сохраненное расположение мебели.
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
