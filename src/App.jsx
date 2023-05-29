import { Header, Columns } from "./components";
import { config } from "./global/config";
export function App() {
    return (
        <div className="App">
            <Header />
            {config.columns.map((column, index) => (
                <Columns
                    key={`column-${index}-${column.id}`}
                    columnData={column}
                />
            ))}
        </div>
    );
}

export default App;
