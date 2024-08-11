const LinkItem = (props) => {
    const deleteHandler = () => {
        props.onDelete(props.id);
    };
    const editHandler = () => {
        props.onEdit(props.id);
    };
    return (
        <div>
            <div>
                {props.title + " -> "}  
                <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url }</a>
                <button onClick={editHandler}>Edit</button>
                <button onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    );
};

export default LinkItem;