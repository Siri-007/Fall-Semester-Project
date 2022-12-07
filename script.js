class item {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }
}

kidJeans = new item("Kids Jeans", "XS", 25);
sweater = new item ( "sweater", "xl", 50);
socks = new item ("Socks", "l", 10);

var cart = [kidJeans, sweater, socks];

(var itm in selection)
{
    document.getElementById("selection").innerHTML += "<li><p>"+selection[itm].name+"</p><br><p>"+selection[itm].size+"</p><br><p>"+selection[itm].price+"€</p></li>";
}