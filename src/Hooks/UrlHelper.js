export function buildUrl(url, params){
    let isBase = url.endsWith('?')
    for(const[key,value] of Object.entries(params)){
        // let re = new RegExp("(?<=[? | &]"+key+"=)[0-9]+") //check if key already exist in url
        let re = new RegExp("(?<=[? | &]"+key+"=)([0-9]+|[^&|$]+)+") //check if key already exist in url
        let valuesFixed = value.toString().replace(' ', '_') 
        if(url.search(re) > -1){
            url = url.replace(re, valuesFixed) //replace value if key exist
        }
        else{
            url += (isBase? '':'&')+key+'='+valuesFixed // add key-value if key not exist
            isBase = false;
        }
    }
    console.log(url)
    return url
}