function List() {
    const fruits = ["apple", "banana", "pineapple", "orange"];
    const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>)

    return (
        <ol>{listItems}</ol>
    );
} 

export default List;