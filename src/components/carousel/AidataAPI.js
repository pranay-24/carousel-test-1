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
