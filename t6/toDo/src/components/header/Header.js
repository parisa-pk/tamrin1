import Button from "../shared/Button";
import './header.css';
import Stats from "../stats/Stats";

function Header({onAdd, onRemoveAll, todoListLength, doneItemsLength}){
    function addTodo(){
        const newTodo = prompt("What is the todo?")
        onAdd(newTodo)
    }

    return (<header className="header">
        <div className="header__actions">
            <Button onClick={addTodo}>
                افزودن
            </Button>

            <Button onClick={onRemoveAll} type='danger'>
                حذف همه
            </Button>
        </div>

        <div className="header__stats">
            <Stats title="انجام نشده‌ها" value={todoListLength}  />

            <Stats title="انجام شده‌ها" value={doneItemsLength} />
        </div>
    </header>)
}

export default Header;