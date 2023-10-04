export async function load({params}) {
    try {
      console.log("Search Query:", params.id);
      const apiKey = '11b7f92ac0548b80d7e51942d29f9d5b'; // Replace with your TMDb API key
      const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US&page=1`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      return {
        response : data
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }