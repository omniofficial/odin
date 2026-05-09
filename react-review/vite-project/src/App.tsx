import ListGroup from "./components/ListGroup";

function App() {
    let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        // App send data into ListGroup, props. Props receive data from the parent.
        <div>
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            ></ListGroup>
        </div>
    );
}

export default App;
