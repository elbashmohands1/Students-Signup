
type dataType = {
    id:number;
    title:string;
    body:string;
}
const useFetch  = async () => {
    const getDate = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!res.ok) {
          throw new Error("Faild to fetch data");
        }
        const data = await res.json();
        return data;
      };
      const data: dataType[] = await getDate();
  return data
}

export default useFetch