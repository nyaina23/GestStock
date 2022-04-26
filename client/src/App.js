import Form from "./components/Form";
import Inventory from "./components/Inventory";
import Navbar from "./components/Navbar";

const App = () => {

    return (
        <>
            <div className="container">
                <Navbar />
                <Form />
                <Inventory />
            </div>
        </>
    )
}

export default App;
