import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {faker} from "@faker-js/faker";
import {nanoid} from "nanoid";
import Table from "./components/Table";


function App() {
    const loads = []
    for (let i = 1; i <= 30; i++) {
        loads.push({
            id: nanoid(),
            vehicle: faker.vehicle.vehicle(),
            zipPU: faker.address.zipCode(),
            zipDO: faker.address.zipCode(),
            rate: faker.commerce.price()
        })
    }


    return (
        <div className="App">
            <Table loads={loads}/>
        </div>
    );
}


export default App;
