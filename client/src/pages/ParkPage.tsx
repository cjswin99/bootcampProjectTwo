interface Park {
    id: string;
    fullName: string;
    description: string;
    url: string;
    designation: string;
    images: ParkImage[];
  }
  
  interface ParkImage {
    url: string;
    title: string;
    altText: string;
  }



function ParkPage(){
    return(
        <h1>this is the park page</h1>
    )
const getParksByState = async (state: string) => {
  try {
    const response = await fetch(`/api/parks/${state}`);
    const parks = await response.json();
    console.log('Parks:', parks);
    return parks;
  } catch (err) {
    console.log('Error:', err);
    return err;
  }
};
}






  export default ParkPage;