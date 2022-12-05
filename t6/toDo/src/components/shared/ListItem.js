import Button from '../shared/Button';
import './listItem.css'

function ListItem({title, onRemoveItem}){
    function handleRemove(){
        onRemoveItem(title)
    }

    return (
        <div className="list-item">
            {title} <Button onClick={handleRemove} type="danger">حذف</Button>
        </div>
    );
}

export default ListItem;