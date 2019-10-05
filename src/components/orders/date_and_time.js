



export function dateAndTime (trial2) {
    let partialObject = null;
    console.log("trial2:: ", trial2);

    if (trial2 && typeof trial2 === 'string') {
        partialObject = {};
    }

    var res = (trial2 && trial2.split("T"))

    //var res = trial2.split("T");

    //let trialArray = [];

    ///console.log(typeof(trial));

    // let date1 =[];
    //  for (var i=0; i<10; i++) {
    //     trialArray.push(trial2[i]);
    // }
    console.log("res:: " + res);

    return res;

    //return trialArray;    
    //return partialObject = trial2;

}





// export function queryToObject (query) {
//     let queryObject = null;

//     if (query && typeof query === 'string') {
//         queryObject = {};
//         query.split('?').pop().split('&').forEach(pair => {
//             const [k, v] = pair.split('=');
//             queryObject[k] = decodeURI(v);
//         });

//         }

//         return queryObject;
//     }