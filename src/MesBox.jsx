function MesBox({userName, textColor}){

    let style = {color: textColor};

    return(
        <>
        <h1 style={style}>Hi, {userName}</h1>
        <h3>Wlcome To The User Dashboard</h3>
        </>
    );
}


export default MesBox;