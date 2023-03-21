window.onload=()=>{
    main()
}

main=()=>{
    const root = document.getElementById('root');
    const bgColor= document.querySelector('.changeColor')
    const colorCode= document.getElementById('bg-color')
    const copyColor= document.querySelector('.copyColor')
    bgColor.addEventListener('click',function(){
        const color = colorGenerator()
        root.style.background= color;
        colorCode.value = color
    })
    copyColor.addEventListener('click',function(){
        navigator.clipboard.writeText(colorCode.value);

        var div = document.createElement('div');
        div.className = 'show';
        div.innerText=colorCode.value + ' copied';
        console.log(div)
        document.body.appendChild(div)

        div.addEventListener('click',function(){
            div.remove('.show')
            div.className('hide')
        })
    })

}


function colorGenerator(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

console.log(colorGenerator())