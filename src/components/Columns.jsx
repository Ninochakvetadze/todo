import { Title } from "./Title";
export function Columns(props) {
    const { columnData } = props;
    return (
        <div className="column">
            <Title type="h3" className="columnTitle" text={columnData.Title} />
        </div>
    );
}
