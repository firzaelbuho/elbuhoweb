import axios from "axios";


const RegisterUser = async (url:string, body:Object): Promise<any> =>  {

    try {
      const response = await axios.post(url, body);
      return response.data
     
    } catch (error:any) {
      console.error('Error fetching wallpapers:', error);
      return error.response.data;
    }

}
  
export default RegisterUser;