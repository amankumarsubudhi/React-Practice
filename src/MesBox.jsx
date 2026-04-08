function MesBox({userName, textColor}){

    let style = {color: textColor};

    return(
        <>
        <h1 style={style}>Hello, {userName}</h1>
        <h3>Welcome To User Dashboard</h3>
        </>
    );
}


export default MesBox;