import {form1, form2, form3}


function messageForm( res : boolean) {
    if(res){
         return (    
            <div> 
                <h3>Pasaste la prueba, Bienvenido!</h3>
                <div>   
                    <img src="../disqr.png" alt="qr para unirte" />
                </div>
            </div>
        )
    } 
    return(
        <div>
            <h3>No pasate la prueba vuelve a intentar</h3>
        </div>
    )
}
