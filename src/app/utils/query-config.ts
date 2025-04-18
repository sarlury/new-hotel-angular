export const QueryConfig =  {
    body : {
        query: `
          query {
            getHotels {
              id
              name
              location
              description
              createdAt
              updatedAt
            }
          }
        `
      },

    addHotel(name: string, location: string, description: string) {
         const body = {
            query: `mutation { addHotel(name: \"${name}\", location: \"${location}\", description: \"${description}\") { id name location } }`
          }
          return body;
          
    },

    deleted(id: number) {
       const softDeleted = {
            "query": `mutation { softDeleteHotel(id: ${id}) }`
          }
        return softDeleted;

    },

    updateHotel(id: number, name: string, location: string, description: string) {
        const body = {
            "query": `mutation { updateHotel(id: ${id}, name: \"${name}\", location: \"${location}\", description: \"${description}\") { id name location description } }`
          }

        return body;
          
    }
      
}