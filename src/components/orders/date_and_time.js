



export function dateAndTime (trial2) {
    let partialObject = null;
    console.log("trial2:: ", trial2);

    if (trial2 && typeof trial2 === 'string') {
        partialObject = {};
    }

    var res = (trial2 && trial2.split("T"))

    
    console.log("res:: " + res);

    return res;

    

}

