// function Greet() {
//     return <h1>Hell bro</h1>
// }

// function Greet(props) {
//     return (
//         <div>
//             Hello, I am {props.name}
//         </div>
//     );
// }

const Greet = (props) => <h1>Hello, I am {props.name} aka {props.heroName}</h1>


export default Greet;
