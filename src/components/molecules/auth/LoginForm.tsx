export default function LoginForm(){
   
   
    return (
        <div className="card shadow  p-10  ">
            <form action="">
                <div className="gap-5 grid grid-cols-1">
                    <div className="mt-0">
                        <h1><strong>Login!</strong></h1>
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered  w-full " />
                    <input type="text" placeholder="Type here" className="input input-bordered  w-full " />
                    
                    
                    <button className="btn btn-primary">Login</button>
                </div>
               
            </form> 

        </div>
    );
}