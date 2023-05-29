// import NightlightIcon from "@mui/icons-material/Nightlight";
import { Button } from "./Button";
export function Header() {
    return (
        <header className="AppHeader">
            <h1>React App</h1>
            <Button
                className="button--icon"
                onClick={() => console.log("Clicked")}
            >
                {/* <NightlightIcon /> */}
            </Button>
        </header>
    );
}
