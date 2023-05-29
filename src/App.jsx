import { Header, Columns } from "./components";
import { config } from "./global/config";
export function App() {
    return (
        <div id="App">
            <Header />
            <div className="columns">
                {config.columns.map((column, index) => (
                    <Columns
                        key={`column-${index}-${column.id}`}
                        columnData={column}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
