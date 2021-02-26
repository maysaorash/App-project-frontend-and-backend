import React,{useEffect} from 'react' 
function List() {
const handleData = async() => {
    try {
        const response = await fetch("http://localhost:3001/api/customers");
        if (response.ok) {
          let jsonResponse = await response.json();
          console.log(jsonResponse);
        } else {
          throw new Error('Request failed')
        }
      } catch (error) {
        console.log(error);
      }
    }
useEffect(()=>{handleData()},[])

    return (
        <div>
            
        </div>
    )
}

export default List;
