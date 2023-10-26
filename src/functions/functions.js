export function isUserAuth() {
    let isAuith = false;
    if (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined') {
        isAuith = false
    } else {
        isAuith = true
    }
    return isAuith
}