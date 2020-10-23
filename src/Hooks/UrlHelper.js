export function buildUrl(url, params){
    let isBase = url.endsWith('?')
    for(const[key,value] of Object.entries(params)){
        if(!key || !value)
            continue
        let re = new RegExp("(?<=[? | &]"+key+"=)([0-9]+|[^&|$]+)+") //check if key already exist in url
        let valuesFixed = value.toString().replace(' ', '_') 
        if(url.search(re) > -1)
            url = url.replace(re, valuesFixed) //replace value if key exist
        else{
            url += (isBase? '':'&')+key+'='+valuesFixed // add key-value if key not exist
            isBase = false
        }
    }
    return url
}

// export function buildUrl(url, params){
//     let isBase = url.endsWith('?')
//     for(const[key,value] of Object.entries(params)){
//         let val = value[0]
//         let is_add = value[1]
//         if(!key || !val)
//             continue
//         if(is_add)
//         {
//             let re = new RegExp("(?<=[? | &]"+key+"=)([0-9]+|[^&|$]+)+") //check if key already exist in url
//             let valuesFixed = val.toString().replace(' ', '_') 
//             if(url.search(re) > -1){
//                 url = url.replace(re, valuesFixed) //replace value if key exist
//             }
//             else{
//                 url += (isBase? '':'&')+key+'='+valuesFixed // add key-value if key not exist
//                 isBase = false
//             }
//         }
//         else{
//             let re = new RegExp("(?<=[?|&])("+key+"=([0-9]+|[a-zA-Z ]+)(?:&))")
//             url = url.replace(re, '')
//         }
//     }
//     console.log(url)
//     return url
// }