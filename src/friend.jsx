export default function Friend({friend}){

    const {name,email,phone}= friend;
    return(
        <div className="n-card">
            <h4>
                Name:{name}
               <p> E-mail:{email}</p>
               <p>Phone:{phone}</p>
            </h4>
        </div>

    )
}