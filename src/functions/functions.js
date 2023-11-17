export function isUserAuth() {
    let isAuith = false;
    if (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined') {
        isAuith = false
    } else {
        isAuith = true
    }
    return isAuith
}


export function formatedSum(sum) {
    
    const formeted = sum ? Number.isInteger(Number(sum)) ? Number(sum) : Number(sum).toFixed(2) :0
    return formeted.toString().replace(".", ',') + "  €"
}


