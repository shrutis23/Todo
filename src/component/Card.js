function Card(props){
    const {name,age}=props.temp;
    return(
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
        </div>
    );
}
export default Card;