    const product = [
      {
          id: 0,
          image: 'dumbellset.jpg',
          title: 'Adjustable Dumbbells',
          price: 749,
      },
      {
          id: 1,
          image: 'airpods.jpg',
          title: 'Air Pods Pro',
          price: 60
      },
      {
          id: 2,
          image: 'protienshake.jpg',
          title: 'Purified Protein Chocolate 500g',
          price: 230,
      },
      {
          id: 3,
          image: 'headphones.jpg',
          title: 'JBL TUNE 710BT Wireless Headphones',
          price: 1400,
      },
      {
        id: 4,
        image: 'creatine.jpg',
        title: 'USN Creatine Transport 650g',
        price: 200,
    },
    {
        id: 5,
        image: 'bakishorts.jpg',
        title: 'Gym Shorts Black for Men',
        price: 175
    },
    {
        id: 6,
        image: 'boxinggloves.jpg',
        title: 'Boxing gloves',
        price: 499,
    },
    ];

    function addtocart(id) {
      // Add your logic to handle adding the product to the cart
      console.log('Add to cart: ', id);
    }

    const categories = [...new Set(product.map((item) => item))];
    let i = 0;
    document.getElementById('root').innerHTML = categories.map((item) => {
      var { image, title, price } = item;
      return `
        <div class='box'>
          <div class='img-box'>
            <img class='images' src='${image}' alt='${title}'>
          </div>
          <div class='bottom'>
            <p>${title}</p>
            <h2>R ${price}.00</h2>
            <button onclick='addtocart(${i++})'>Add to cart</button>
          </div>
        </div>
      `;
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...categories[a]});
        displaycart();
    }
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(a){
        let j = 0; total=0;
        document.getElementById("count").innerHTML=cart.length;
        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById("total").innerHTML = "R "+0+".00";
        }
        else{
            document.getElementById("cartItem").innerHTML = cart.map((items)=>
            {
                var{image, title, price} = items;
                total = total+price;
                document.getElementById("total").innerHTML = "R "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>R ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
                );
            }).join('');
        }
    }