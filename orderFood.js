window.addEventListener('load', () => {
    document.querySelector('.loader').classList.add('loader-hide');
})

getTitleLst = document.querySelector('.titlelst');
getPriceLst = document.querySelector('.pricelst');
let billAmt = document.querySelector('.totAmt');



let inputs = document.getElementsByTagName('input');
let menuItems = document.querySelectorAll('.menu-item');

let get_item = document.querySelectorAll('.cateogryItem');
let Items = document.querySelectorAll('.foodType');
let btnCount = 0;


get_item[0].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'breakfast'){
                Items[i].classList.add('Items-inactive')
            }
        }   
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].classList.remove('Items-inactive')
            }
            btnCount = 0;
        }

    }
})

get_item[1].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'lunch'){
                Items[i].classList.add('Items-inactive')
            }
        }   
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].classList.remove('Items-inactive')
            }
            btnCount = 0;
        }

    }
})

get_item[2].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'dinner'){
                Items[i].classList.add('Items-inactive')
            }
        }   
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].classList.remove('Items-inactive')
            }
            btnCount = 0;
        }

    }
})

get_item[3].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'fastFood'){
                Items[i].classList.add('Items-inactive')
            }
        }   
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].classList.remove('Items-inactive')
            }
            btnCount = 0;
        }

    }
})

get_item[4].addEventListener('click', function (){
    btnCount++;
    for (i=0;i<Items.length;i++){
        if (btnCount == 1){
            if (Items[i].id != 'drinks'){
                Items[i].classList.add('Items-inactive')
            }
        }   
        if (btnCount == 2){
            for (i=0;i<Items.length;i++){
                Items[i].classList.remove('Items-inactive')
            }
            btnCount = 0;
        }

    }
})

let labels = document.querySelectorAll('label');
i=0;
function selectedItem (name){
    receivedItem = document.getElementsByName(name)[0].classList;
    if (receivedItem.value == 'menu-item menu-item-selected'){
        // receivedItem.remove('menu-item-selected');

    }
    else{
        receivedItem.add('menu-item-selected');
    }
}


menuItems.forEach((menuItem) => {
    clkcount = 0
    menuItem.addEventListener('click',() => {
        if (menuItem.classList.value === 'menu-item menu-item-selected'){
            itemName = menuItem.childNodes[3].childNodes[1].childNodes[1].innerText;
            itemPrice = menuItem.childNodes[3].childNodes[1].childNodes[3].innerText;
            if (itemPrice.length > 6){
                let itemHalfPrice = itemPrice.substr(4,2);
                let itemFullPrice = itemPrice.substr(7,3);

                let modal = document.querySelector('.modal-container');
                let setName = document.querySelector('.FoodItemName');
                setName.innerText = itemName;
                let getHalf = document.querySelector('.halfPrice');
                getHalf.innerText = itemHalfPrice;
                let getFull = document.querySelector('.fullPrice');


                getFull.innerText = itemFullPrice;
                modal.style.display = 'inline-flex';


                const halfBtn = document.querySelector('.halfbtn');
                const fullBtn = document.querySelector('.fullbtn');
                
                halfBtn.replaceWith(halfBtn.cloneNode(true)); // Remove previous event listeners
                fullBtn.replaceWith(fullBtn.cloneNode(true)); // Remove previous event listeners
                
                document.querySelector('.halfbtn').addEventListener('click', () => {
                    orderItemName = document.createElement('li');
                    orderItemPrice = document.createElement('li');
                
                    randomClass = Math.random();
                
                    orderItemName.classList.add(`${randomClass}`);
                    orderItemPrice.classList.add(`${randomClass}`);
                
                    orderItemName.innerText = itemName;
                    orderItemPrice.innerHTML = `<i class="fa-solid fa-trash dltliPrice"> ${getHalf.innerText} </i>`;
                
                    getTitleLst.appendChild(orderItemName);
                    getPriceLst.appendChild(orderItemPrice);
                    
                    
                    billAmt.innerText = parseInt(billAmt.innerText) + parseInt(getHalf.innerText);
                    modal.style.display = 'none';

                    let billItems = [];
                    billItems.push(`\nItem Name: Amount (in ₹)\n`)
                    for (let i = 0; i < getTitleLst.childElementCount; i++) {
                        billItems.push(`${getTitleLst.children[i].innerText} : ₹${getPriceLst.children[i].innerText}`);
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
                });
                

                document.querySelector('.fullbtn').addEventListener('click', () => {
                    orderItemName = document.createElement('li');
                    orderItemPrice = document.createElement('li');
                
                    randomClass = Math.random();
                
                    orderItemName.classList.add(`${randomClass}`);
                    orderItemPrice.classList.add(`${randomClass}`);
                
                    orderItemName.innerText = itemName;
                    orderItemPrice.innerHTML = `<i class="fa-solid fa-trash dltliPrice"> ${getFull.innerText} </i>`;
                
                    getTitleLst.appendChild(orderItemName);
                    getPriceLst.appendChild(orderItemPrice);
                    
                    
                    billAmt.innerText = parseInt(billAmt.innerText) + parseInt(getFull.innerText);
                    modal.style.display = 'none';

                    let billItems = [];
                    billItems.push(`\nItem Name: Amount (in ₹)\n`)
                    for (let i = 0; i < getTitleLst.childElementCount; i++) {
                        billItems.push(`${getTitleLst.children[i].innerText} : ₹${getPriceLst.children[i].innerText}`);
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
                });

            }
            else{

              orderItemName = document.createElement('li');
              orderItemPrice = document.createElement('li');

              randomClass = Math.random();

              orderItemName.classList.add(`${randomClass}`);
              orderItemPrice.classList.add(`${randomClass}`);

              orderItemName.innerText = itemName;
              orderItemPrice.innerHTML = `<i class="fa-solid fa-trash dltliPrice"> ${itemPrice.substr(4,5)} </i>`;

              getTitleLst.appendChild(orderItemName);
              getPriceLst.appendChild(orderItemPrice);


             billAmt.innerText = parseInt(billAmt.innerText) + parseInt(itemPrice.substr(4,5));

             let billItems = [];
             billItems.push(`\nItem Name: Amount (in ₹)\n`)
             for (let i = 0; i < getTitleLst.childElementCount; i++) {
                 billItems.push(`${getTitleLst.children[i].innerText} : ₹${getPriceLst.children[i].innerText}`);
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
            
        }
    })
})

getPriceLst.addEventListener('click', function(e){
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


username = 'User'; //Testing data;

// username = prompt('Enter your name please : ');
// if (username == null){
//     username = 'User';
// }

// alert(`Welcome ${username}! Enjoy Shopping...`)