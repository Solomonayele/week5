function isMinnesotaZip(code){
    // All mn zip are between these 55001 and 56763
    if(code >= 55001 && code<= 56764){
        return true
    }else {
        return false
    }
}

console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(5643333))
