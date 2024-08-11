import LinkItem from "./LinkItem/LinkItem";

const LinkHolder = (props) => {
    const deleteItemHandler = (id) => {
        props.setItems(prevItems => prevItems.filter((item, index) => index !== id));
    };
    const editItemHandler = (id) => {
        const itemToEdit = props.items[id];
        props.setTitle(itemToEdit.title);
        props.setUrl(itemToEdit.url);
        deleteItemHandler(id);
    };
    return (
        <div>
            <h3>All Bookmarks</h3>
            {props.items.map((item, index) => (
                <LinkItem
                    key={index} 
                    id={index} 
                    title={item.title} 
                    url={item.url} 
                    onEdit = {editItemHandler}
                    onDelete={deleteItemHandler} 
                />
            ))}
        </div>
    );
};

export default LinkHolder;