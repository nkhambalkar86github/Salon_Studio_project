import axios from "axios"

export async function FetchCostomer()
{
    try 
    {
      
      const response= await axios.get("http://127.0.0.1:2310/costomer");
      console.log(response.data.costomer)
      return response.data.costomer;
      

    } catch (error) 
    {
        console.log(error);
    }
}

export async function saveCostomer(costomerData)
{
    try
    {

        const response=await axios.post('http://127.0.0.1:2310/costomer',costomerData);
        return response.data;
        
    } catch (error)
     {
        console.log(error);
    }

}



export async function deleteCostomer(age)
{
    console.log(age)
    try 
    {
       const response=await axios.delete(`http://127.0.0.1:2310/costomerdel/${age}`)
        return response.data;
    } catch (error)
    {
          console.log(error);        
    }
}

export async function fetchCostomerByNumber(number)
{
    console.log(number);
    try 
    {
       const response=await axios.get(`http://127.0.0.1:2310/costomer/${number}`)
       console.log(response);
        return response;
    } catch (error)
    {
          console.log(error);        
    }
}

export async function updatedCostomer(updateData,number)
{
    
    try 
    {
       const response=await axios.put(`http://127.0.0.1:2310/costomer/${number}`,updateData)
       console.log(response);
        return response;
    } catch (error)
    {
          console.log(error);        
    }
}