export const SearchByName = (input) => {
    // Fetch data from my backend
    return fetch(process.env.REACT_APP_BACKEND_API + input)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } 
      })
      .then((data) => {
        if (data) {
          return {result: true, countries: data}
        } else {
            return {result: false, countries: []}
        }   
      })
      .catch((error) => {
        console.log(error)
        return {result: false, countries: []}
      });
  };