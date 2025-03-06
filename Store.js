let get_item = document.querySelectorAll('.item');

let allItems = document.querySelector('.allItems');
let Items = document.querySelectorAll('.Items');

let buyNowBtn = document.querySelectorAll('.buyNow');

let billAmt = document.querySelector('.totAmt');

let btnCount = 0

// for biscuits

get_item[0].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Biscuits'){
                Items[i].setAttribute('class','Items inactive')
            }
        }   
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for sweets

get_item[1].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Sweets'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for milk

get_item[2].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Dairy'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for chocolate

get_item[3].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Chocolate'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for colddrink
get_item[4].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'ColdDrink'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})

// for namkeen
get_item[5].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'Namkeen'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})


// for stationary
get_item[6].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'stationary'){
                Items[i].setAttribute('class','Items inactive')
            }
        }
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].setAttribute('class','Items')
            }
            btnCount = 0;
        }

    }
    allItems.style.height = 'fit-content';
})




for (i=0;i<buyNowBtn.length;i++){
    buyNowBtn[i].addEventListener('click', function (e){

        getDiv = document.getElementsByName(`${e.target['name']}`);
        let title = document.querySelector('.titlelst');
        let price = document.querySelector('.pricelst');

        listItemName = document.createElement('li');
        listItemPrice = document.createElement('li');

        listItemName.innerText = getDiv[0].children[1].innerText;
        listItemPrice.innerHTML = `<i class="fa-solid fa-trash dltliPrice"> ${getDiv[0].children[2].children[0].innerText} </i>`;

        billAmt.innerText = parseInt(billAmt.innerText) + parseInt(getDiv[0].children[2].children[0].innerText);

        title.appendChild(listItemName);    
        price.appendChild(listItemPrice);

        
        randomClass = Math.random();

        listItemName.classList.add(`${randomClass}`);
        listItemPrice.classList.add(`${randomClass}`);


        let billItems = [];
        billItems.push(`\nItem Name: Amount (in ₹)\n`)
        for (let i = 0; i < title.childElementCount; i++) {
            billItems.push(`${title.children[i].innerText} : ₹${price.children[i].innerText}`);
        }
        billItems.push(`\nTotal Amount To Be Paid : ₹${billAmt.innerText}\n`)
        billItems.push(`\nHope to see you soon ${username} 😊. Thanks for shopping with us!\n`)
        billItems.push(`\nAny Queries ?? Our Contact Info 👇🏻\n`)
        billItems.push(`Website : ak-sudo.github.io/pandeyPg/`)
        billItems.push(`Maid Id : contactpandeyPg@gmail.com/`)
        billItems.push(`Address : Aambagh near Dr. APJ Abdul Kalam Institute of Technology, Tanakpur (262309)`)

        let billData = `Bill Receipt : ${username} \n--------------------------${billItems.join("\n")}`;

        const blob = new Blob([billData], { type: "plain/text" });

        const link = document.createElement("a");
        DownloadBtn = document.querySelector('.downloadBtn');

        DownloadBtn.href = URL.createObjectURL(blob);
        DownloadBtn.download = `${username}-Bill.txt`;


        // console.log(getDiv[0].children[1].innerText); // NAME OF ITEM
        // console.log(getDiv[0].children[2].children[0].innerText); // PRICE OF ITEM  
        return billItems;
})
}



let titleol = document.querySelector('.titlelst');
let priceol = document.querySelector('.pricelst');

priceol.addEventListener('click', function(e){
    if(e.target.nodeName == 'I'){
        
        gettitle = e.target.parentElement.classList.value;
        gettitleLi = document.getElementsByClassName(`${gettitle}`);
        gettitleLi[0].remove()
        e.target.parentElement.remove();   

        billAmt.innerText = parseInt(billAmt.innerText) - parseInt(e.target.innerText);

        let billItems = [];

        let title = document.querySelector('.titlelst');
        let price = document.querySelector('.pricelst');

        if (title.childElementCount != 0){
            billItems.push(`\nItem Name: Amount (in ₹)\n`)
            for (let i = 0; i < title.childElementCount; i++) {
                billItems.push(`${title.children[i].innerText} : ₹${price.children[i].innerText}`);
            }
            billItems.push(`\nTotal Amount To Be Paid : ₹${billAmt.innerText}\n`)
            billItems.push(`\nHope to see you soon ${username} 😊. Thanks for shopping with us!\n`)
            billItems.push(`\nAny Queries ?? Our Contact Info 👇🏻\n`)
            billItems.push(`Website : ak-sudo.github.io/pandeyPg/`)
            billItems.push(`Maid Id : contactpandeyPg@gmail.com/`)
            billItems.push(`Address : Aambagh near Dr. APJ Abdul Kalam Institute of Technology, Tanakpur (262309)`)
    
            let billData = `Bill Receipt : ${username} \n--------------------------${billItems.join("\n")}`;
    
            const blob = new Blob([billData], { type: "plain/text" });
    
            const link = document.createElement("a");
            DownloadBtn = document.querySelector('.downloadBtn');
    
            DownloadBtn.href = URL.createObjectURL(blob);
            DownloadBtn.download = `${username}-Bill.txt`;
        }
        else{
            billItems.push(`Please add some items into the bills to process cheeckout!`);
            let billData = `${username}, ${billItems.join()}`;
    
            const blob = new Blob([billData], { type: "plain/text" });
    
            const link = document.createElement("a");
            DownloadBtn = document.querySelector('.downloadBtn');
    
            DownloadBtn.href = URL.createObjectURL(blob);
            DownloadBtn.download = `Empty-Bill.txt`;

        }

    };
});

username = prompt('Enter your name please : ');
if (username == null){
    username = 'User';
}
alert(`Welcome ${username}! Enjoy Shopping...`)
