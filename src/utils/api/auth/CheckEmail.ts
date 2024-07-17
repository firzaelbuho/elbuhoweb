import axios from "axios";


const CheckEmail = async (url:string): Promise<any> => {
    try {
      const response = await axios.get(url);
      return response.data
      console.log(response)
     
    } catch (error:any) {
      console.error('Error fetching wallpapers:', error);
      return error.response.data;
    }
  };
  
  export default CheckEmail;