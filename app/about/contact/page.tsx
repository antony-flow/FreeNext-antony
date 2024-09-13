
const getCommentsData = async (postId: string) => {
    let attempts = 0;
    let maxattempt = 3;

    while(attempts<maxattempt) {
        try{
      const res = await fetch(
        `https://dummyjson.com/products/1`,{cache: 'no-store'}
      );
  
      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
        attempts++;
        console.log(error);
        if(attempts>=maxattempt){
            console.log("reached max attempt");
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
}
return null;
  };

export default async function Contact() {
    const data = await getCommentsData("1");
    console.log(data);
    return (<div>
       hello from about/contact page file
       </div>);
};