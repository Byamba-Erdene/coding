const shakeBird = () => {
    // Let us grab a bird
    let bird;

    bird.classList.remove('shake')
    bird.classList.add('shake')
}
const shakeNest = () => {
    // Let us grab a bird's nest
    let nest;
    // Let us grab a leaves
    let egg;
    // Let us grab a bird
    let bird;

    bird.classList.remove('shake')
    bird.classList.add('shake')
    egg.classList.remove('shake')
    egg.classList.add('shake')
    nest.classList.remove('shake')
    nest.classList.add('shake')

}
const moveEgg = () => {
    // Let us grab a egg
    let egg;
    egg.classList.remove('move-egg')
    egg.classList.add('move-egg')

}
const fallLeaves = () => {
    // Let us grab a leaves
    let leaves;

    let leaf = document.getElementsByTagName('i')
    for (let index = 0; index < leaf.length; index++) {
        leaf.item(index).remove();
    }
    for (let index = 0; index < 14; index++) {
        let i = document.createElement('i')
        leaves.appendChild(i)
    }
    leaves.classList.remove('falling-leaves')
    leaves.classList.add('falling-leaves')
}