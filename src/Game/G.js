function G(props,i1){
    const {Question,option1,option2}=props.temp;
    const i2=i1.i;
    return(
        <div className="content">
           <br/>{i2}{Question}<br/>
            <input type="radio" value="option1" name="Q" /> {option1}<br/>
            <input type="radio" value="option2" name="Q" /> {option2}
        </div>
    );
}
export default G;