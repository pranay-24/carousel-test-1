export function queryImage(inputKeyword){
    //console.log(inputKeyword)
    return new Promise( async (resolve,reject)=>{
const requestOption = {
    method:"GET",
    headers: {
        "Content-type": "application/json",
    },
 
}
const apiRoot = "https://api.unsplash.com"
const accessKey =   '8gFfvVjSpFzZSS1fQWFVHWJvBBnAASilT18mKuND-mE';
        const response = await fetch(`${apiRoot}/search/photos?query=${inputKeyword}&page=1&client_id=${accessKey}`,requestOption)

        if (response.ok){
            const data = await response.json();
            //console.log(data)
            resolve(data)
        }else {
            reject ("Request failed");
        }
           
    })
}