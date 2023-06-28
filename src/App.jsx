import styled from "styled-components";
import Floor from "./components/Floor";
import ItemsPool from "./components/ItemsPool";

const Container = styled.div`
    display: flex;
    justify-content: center;
    .items , .floor {
        /* flex: 1; */
        flex-basis: 50%;
    }
`;

const App = () => {
    return (
        <Container>
            <div className="items">
                <ItemsPool />
            </div>
            <div className="floor">
                <Floor />
            </div>
        </Container>
    );
};

export default App;
