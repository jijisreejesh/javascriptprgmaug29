//Create car class that allows you to set car brand and model when create new class...and display details
class car
{
    constructor(brand,model)
    {
        this.brand=brand
        this.model=model
    }
    display()
    {
        console.log(`Car brand : ${this.brand}
Car model : ${this.model}` )
    }
}
let c=new car('BMW','7 series')
c.display()