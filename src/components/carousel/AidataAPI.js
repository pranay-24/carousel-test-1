//import 'dotenv/config'
//  removed
export function queryData (inputData)
{ return new Promise( async (resolve,reject)=>{
const requestOption = {
    method:"POST",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer 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"
    },
    body: JSON.stringify(inputData)
}
const response = await fetch("https://api-inference.huggingface.co/models/gpt2",requestOption)

if (response.ok){
    const data = await response.json();
    //console.log(data)
    resolve(data)
}else {
    reject ("Request failed");
}

})

}

export function queryData1 (inputData)
{ return new Promise( async (resolve,reject)=>{

//const prompt = " Generate a title for a presentation slide based on the following keywords: " + inputData;   
const requestOption = {
    method:"POST",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer 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",
        "max_length" : 512,
    },

    body: JSON.stringify(inputData)
}
const response = await fetch("https://api-inference.huggingface.co/models/MBZUAI/LaMini-Flan-T5-783M",requestOption)

if (response.ok){
    const data = await response.json();
    //console.log(data)
    resolve(data)
}else {
    reject ("Request failed");
}

})

}



export function queryData2 (inputStatement)
{// console.log(inputStatement)
  // console.log(`You are a helpful assistant. Only use the functions you have been provided with. Your are given a statement like '${inputStatement}'. Create content of 20 words for 4 presentation slides based on this statement. You can give content about the effect of the statement, reason for the statement, the impact of the statement. Also give titles to all 4 slides. Last slide will be about reaching out to author, or following his account for more details. `)

  return new Promise( async (resolve,reject)=>{
    const requestData = {
      messages: [
        { role: "system", 
        content: `You are a helpful assistant. Only use the functions you have been provided with. Your are given a statement like ${inputStatement}. Create content of 20 words for 4 presentation slides based on this statement. You can give content about the effect of the statement, reason for the statement, the impact of the statement. Also give titles to all 4 slides. Last slide will be about reaching out to author, or following his account for more details. `
       },
      ],
      functions: [
        
      ]
     
    };
//console.log('sending request ...  ')

try{
  const response =  await fetch('https://api.llama-api.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer LL-0et5NA5GzSdQyquwLV1f8gKY1LGXOCldbHgHXlGXNAaYpeFWo1ylaPFDltMVsLmx' // Replace <token> with the actual token
    },
    body: JSON.stringify(requestData)
  })

  if (response.ok){
    const data = await response.json();
  //  console.log("response is ok",data)
    resolve(data)
}else {
    reject ("Request failed");
}
   
}catch(error){
  console.error("erro during fetch", error)
  reject("error during fetch")
}
   
      

   })

 }
