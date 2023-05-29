import { Title } from "./";
export function Columns(props) {
    const { columnData } = props;
    return (
        <div className="columns">
            <Title type="h3" text={columnData.Title} />
        </div>
    );
}
