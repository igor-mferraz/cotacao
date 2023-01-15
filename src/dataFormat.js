export const formataData = (data) =>{
    let newDate = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
    return newDate
}