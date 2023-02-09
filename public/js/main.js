const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-heart')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteQuote)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

async function deleteQuote(){
    const sName = this.parentNode.childNodes[1].innerText
    const bName = this.parentNode.childNodes[3].innerText
    try{
        const response = await fetch('deleteQuote', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'charNameS': sName,
              'quoteStrS': bName
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const cName = this.parentNode.childNodes[1].innerText
    const qStr = this.parentNode.childNodes[3].innerText
    const tLikes = Number(this.parentNode.childNodes[5].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'charNameS': cName,
              'quoteStrS': qStr,
              'likesS': tLikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}