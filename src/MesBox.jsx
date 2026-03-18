function MesBox({userName, textColor}){

    let style = {color: textColor};

    return(
        <>
        <h1 style={style}>Hi, {userName}</h1>
        </>
    );
}


export default MesBox;