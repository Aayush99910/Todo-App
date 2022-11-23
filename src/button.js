export default function strikethrough() {
//   todosArray.forEach((eachtodo) => {
//     console.log(eachtodo);
//   });

  const completedBtn = document.querySelectorAll('.completed-btn');
  completedBtn.forEach((eachBtn) => {
    eachBtn.addEventListener('click', () => {
      const ParentElement = eachBtn.parentElement.parentElement.parentElement;
      const allPara = ParentElement.querySelectorAll('p');
      allPara.forEach((eachPara) => {
        const strikeThroughElement = document.createElement('s');
        strikeThroughElement.textContent = eachPara.textContent;
        /*eslint-disable */
        eachPara.innerHTML = ' '; 
        eachPara.append(strikeThroughElement);
      });
    });
  });
}


// export function deleteItem () {
//     const deleteBtn = document.querySelectorAll();
// }