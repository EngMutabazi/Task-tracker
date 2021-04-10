import Button from './Button'
function Header({onAdd}) {
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onAdd={onAdd}/>
        </header>
    )
}

export default Header
