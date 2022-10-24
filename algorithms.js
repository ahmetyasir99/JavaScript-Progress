/* Dizideki elemanların kaç kere tekrar ettiğini veren algoritma */
function equalizeArray(arr) {
 let max = 0
  arr.forEach(num => {
      let repeat = arr.filter(others => others === num).length
      if(repeat>max){
          max =repeat
      }
  })
return[arr.length-max]
}