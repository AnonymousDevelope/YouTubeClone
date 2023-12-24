export const getDate = (dayString)=>{
    const oldDay = new Date(dayString)
    const now = new Date();
    const diffYear = now.getFullYear() - oldDay.getFullYear();
    if(diffYear > 1){
        return `${diffYear} years ago`
    } else if(diffYear === 1){
        return `${diffYear} year ago`
    } else if(now.getMonth() - oldDay.getMonth() > 1){
        return `${now.getMonth() - oldDay.getMonth()} months ago`
    } else if(now.getMonth() - oldDay.getMonth() === 1){
        return `${now.getMonth() - oldDay.getMonth()} month ago`
    } else if(now.getDate() - oldDay.getDate() > 1){
        return `${now.getDate() - oldDay.getDate()} days ago`
    } else if(now.getDate() - oldDay.getDate() === 1){
        return `${now.getDate() - oldDay.getDate()} day ago`
    }
}