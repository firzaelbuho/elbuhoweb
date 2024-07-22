import ThemeChanger from "@/components/molecules/general/ThemeChanger"
import LoginForm from "@/components/molecules/auth/LoginForm"
import RegisterForm from "@/components/molecules/auth/RegisterForm"
// import ApiTest from "@/components/ApiTest"

export default function Page() {
    return (
  
      <div className="container mx-auto  p-5">
      
        <div>
          <ThemeChanger />
        </div>
        <div className="w-1/4 mx-auto">
          
        {/* <LoginForm /> */}
        {/* <ApiTest /> */}
        {/* <RegisterForm /> */}

        </div>
       
      
        
       
       
      </div>
    )
  }