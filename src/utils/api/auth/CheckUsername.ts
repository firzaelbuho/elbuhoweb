import axios from "axios";
import { apiBaseUrl } from "../ApiConfig";


const CheckUsername = async (username:string): Promise<any> => {
    const url = apiBaseUrl + "/auth/users/check-username-availability/"+username
    try {
      const response = await axios.get(username);
      return response.data
     
    } catch (error:any) {
      console.error('Error fetching wallpapers:', error);
      return error.response.data;
    }
  };
  
  export default CheckUsername;