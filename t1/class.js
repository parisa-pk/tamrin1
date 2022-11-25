class cycle {
    radius = 0
    x = 0
    y = 0
    constructor(radius){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.create();
    }
    create(){
        const name = ['ali' , 'leila' , 'mehdi' , 'zahra' , 'fatemeh' , 'jaber'];
        const container = document.querySelector('#container');
        const element = document.createElement('div');

        element.push(name[index]);
        element.style.width = this.radius + 'px' ;
        element.style.height = this.radius + 'px' ;
        element.style.backgroundColor = 'white' ;
        element.style.color = 'black'
        element.style.borderRadius = '50%' ;

        element.style.position = 'absolute' ;
        element.style.top = this.y + 'px' ;
        element.style.left = this.x = 'px' ;

        container.append(element) ;

        setTimeout(function () {
            container.remove(element)
        } , 3000)

        new cycle (math.random() * 100);
        console.log(create());
    }


    

}
