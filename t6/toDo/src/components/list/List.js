import ListItem from "../shared/ListItem";
import './list.css'

function List({items, onRemoveItem}){
    return (
        <div className="list">
            {items.map((title)=> <ListItem onRemoveItem={onRemoveItem} title={title} />)}
        </div>
    );
}

export default List;