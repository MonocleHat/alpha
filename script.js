//PROJECT_LEVIATHAN
//OBJECT ARRAYS
console.log("Javascript File Loading");
const images_bait =[
    {
        loc:"images/Bait/ironcarrot.jpg",
        alt:"Iron Carrot",
        title:"Iron Carrot",
        price: "$5.99",
        desc:"Fool your friends with this incredible iron carrot!<br> Caution: Do not use around giant magnets"
    },
    {
        loc:"images/Bait/ironseed.jpg",
        alt:"Iron Seeds",
        title: "Iron Seeds",
        price: "$2.99/lb",
        desc:"For when you need to catch a pesky bird with a comically sized magnet.<br> Caution: Do not use as BB replacement, you'll shoot your eye out"
    },
    {
        loc:"images/Bait/regseed.jpg",
        alt:"Bird Seeds",
        title: "Bird Seeds",
        price: "$2.99/lb",
        desc: "Common bird seed, safe for all birds,<br> or other creatures, I'm just text on a screen, go nuts."
    },
    {
        loc:"images/Bait/trickbone.jpg",
        alt: "Trick Bone",
        title: "Trick Bone",
        price: "$10.00",
        desc: "Fool your friends or your dog with this <br> incredible gag gift, now with 101% real calcium!"
    }
];

const images_DIY = [
    {
        loc:"images/DIY/explosive.jpg",
        alt: "Junior Explosive Kit",
        title:"Hackme Co. Explosive kit",
        price: "$20.00",
        desc: "Will not provide an \"Earth Shattering Kaboom\" <br>but will provide hours of fun"
    },

    {
        loc:"images/DIY/icicle.jpg",
        alt: "Icicle Maker",
        title:"Hackme Co. Icicle Maker",
        price: "$5.00",
        desc: "Freeze your friends for loads of laughs"
    },

    {
        loc:"images/DIY/jetprop.jpg",
        alt:"Jet Pogo Stick",
        title:"Hackme Co. Jet Pogo Stick",
        price: "$199.99",
        desc: "Bounce higher than ever with this<br> Jet Pogo Stick from Hackme Supply"
    },

    {
        loc:"images/DIY/kite.jpg",
        alt: "Giant Kite",
        title:"Hackme Co. Giant Kite",
        price:"$55.99",
        desc:"Provides hours of entertainment, do not fly near airports <br> or during wind storms, Hackme Supply Co <br>is not liable if used as hang-glider"
    },

    {
        loc:"images/DIY/mousetrap.jpg",
        alt:"Mouse Trap",
        title:"Hackme Co. Mouse Trap",
        price:"$20.99",
        desc:"Staircase, slides, marbles, pulleys, bathtub,<br>  diving man, stopsign, and cage suspension <br> device sold seperately."
    },

    {
        loc:"images/DIY/rock.jpg",
        alt: "Artificial Rock",
        title: "Hackme Co. Artificial Rock",
        price:"$299.99",
        desc:"If you cant be a star, you can still be a rock!"
    },

    {
        loc:"images/DIY/rocketsled.jpg",
        alt: "Rocket Sled",
        title: "Hackme Co. Rocket Sled",
        price:"$599.99",
        desc:"Now with no deer required!"
    },

    {
        loc:"images/DIY/rubberband.jpg",
        alt:"Giant Rubber Band",
        title: "Hackme Co. Giant Rubber Band",
        price: "$10.99",
        desc: "May or may not stop roadrunners"
    },

    {
        loc:"images/DIY/tornado.jpg",
        alt: "Tornado Kit",
        title: "Hackme Co. Tornado Kit",
        price: "$11.99",
        desc:"Impress your friends, makes a good party trick!"

    }
];

const images_essent = [
    {
        loc:"images/Essentials/anvil.jpg",
        alt:"Acme Anvil",
        title:"Hackme Co. Acme Anvil",
        price:"$59.99",
        desc:"100% real metal"
    },

    {
        loc:"images/Essentials/axle.jpg",
        alt:"Acme Axle Grease",
        title:"Hackme Co. Acme Axle Grease",
        price:"$10.99",
        desc:"Guaranteed Slippery, otherwise we're<br>  keeping your money anyway. Go complain about it"
    },

    {
        loc:"images/Essentials/boulders.jpeg",
        alt: "Boulders",
        title:"Hackme Co. Boulders",
        price: "$29.99",
        desc: "Just add water for hours of fun. What kind of fun? <br> I dunno, you're the one that bought this"
    },

    {
        loc:"images/Essentials/bumble.jpg",
        alt: "Bees.",
        title:"Hackme Co. Bees.",
        price:"$25.99",
        desc:"Container of all natural organic bees. <br> Warning: Hackme Co. is not responsible for injury as a result of being <br> stung by a container of very angry bees <br> that we may or may not have shaken <br> like crazy before shipping"
    },

    {
        loc:"images/Essentials/elephant.jpg",
        alt: "Elephant Bullets",
        title: "Hackme Co. Elephant Bullets",
        price:"$10.00",
        desc:"Elephant sized bullets? Bullets meant for elephants? <br> Half the fun is finding out what you get"
    },

    {
        loc:"images/Essentials/tooth.jpg",
        alt: "Toothpicks",
        title:"Hackme Co. Toothpicks",
        price:"$0.99",
        desc:"Now made from 100% real teeth!"
    },

    {
        loc:"images/Essentials/ultima.jpg",
        alt: "Ultimatum Dispatcher",
        title: "Hackme Co. Ultimatum Dispatcher",
        price:"$15.99",
        desc:"Made specially for martians and/or defenders<br>  of the twenty-first (and a half) century"
    },

    {
        loc: "images/Essentials/umbr.jpg",
        alt:"Umbrella",
        title:"Hackme Co. Umbrella",
        price:"$10.99",
        desc:"For use only in the event of gravity, falling debris, <br> or other emergencies that require protection <br> via tiny umbrella"
    },

    {
        loc:"images/Essentials/whip.jpg",
        alt:"Whipped Cream Dispenser",
        title:"Hackme Co. Whipped Cream Dispenser",
        price:"$2.99",
        desc:"Just whipped cream, because every scheme needs a lil' dessert"
    }
];

const images_Gadgets=[
    {
        loc:"images/Gadgets/acmeelec.jpg",
        alt:"Electric Eye",
        title:"Hackme Co. Electric Eye",
        price:"$20.99",
        desc:"I dont even know what this is, even the factory doesnt<br>  know what it is but its cool as hell. Order like 6 if you want"
    },
    {
        loc:"images/Gadgets/boomerang.jpg",
        alt:"Boomerang",
        title:"Hackme Co. Boomerang",
        price:"$9.99",
        desc:"millennialrang sold seperately."
    },
    {
        loc:"images/Gadgets/hen.jpg",
        alt:"Hen Grenade",
        title:"Hackme Co. Hen Grenade",
        price:"$2.99",
        desc:"Scare the hell out of a chicken <br> coop with this fun gag toy"
    },
    {
        loc:"images/Gadgets/hitch.jpg",
        alt:"Hitch Hikers Thumb",
        title:"Hackme Co. Hitch Hikers Thumb",
        price:"$5.99",
        desc:"Flag down rides with ease with this <br> simple gadget from Hackme Supply co"
    },
    {
        loc:"images/Gadgets/indestructo.jpg",
        alt:"Indestructable Ball",
        title:"Hackme Co. Indestructable Ball",
        price:"$55.99",
        desc:"Come in like a wrecking ball with this indestructable steel <br> weapon of constant rolling devastation.<br>  Warning: Hackme Co. is not responsible for injuries resulting in <br>  attempting to hide within ball enclosure"
    },
    {
        loc:"images/Gadgets/jetmotor.jpg",
        alt:"Jet Motor",
        title:"Hackme Co. Jet Motor",
        price:"$599.99",
        desc:"We wont ask why and wont tell why you might need a <br> jet motor, but for a price like this you can deprive one more plane of a <br> jet motor. Not like it was using it anyway!"
    },
    {
        loc:"images/Gadgets/jetuni.jpg",
        alt:"Jet Propelled Unicycle",
        title:"Hackme Co. Jet Propelled Unicycle",
        price:"$25.99",
        desc:"Impress your friends, get the ladies, or whomever you want,<br>  you got a jet unicycle man, the world is your oyster. <br>  probably. (Hackme Co. is not responsible for being disowned as <br>  a result of spending money on a jet propelled unicycle"
    },
    {
        loc:"images/Gadgets/smoke.jpg",
        alt:"Smoke bomb",
        title:"Hackme Co. Smoke bomb",
        price:"$15.99",
        desc:"Disappear into the night with this Hackme brand Smokescreen Bomb!"
    },
    {
        loc:"images/Gadgets/tennisshoes.png",
        alt:"Jet Propelled Tennis Shoes",
        title:"Hackme Co. Tennis Shoes",
        price:"$20.99",
        desc:"Run at the speed of sound with these jet propelled tennis shoes!"
    }
];
const images_Pills =[
{
    loc:"images/Pills/aspirin.jpg",
    alt:"Aspirin",
    title:"Hackme Co. Aspirin",
    price:"$24.99",
    desc:"Cures headaches, backaches, musclepain, nausea, heartburn, <br> indigestion, upset stomach and diorr...diarr...however you spell that last one. <br> Hackme Aspirin: Targets your pains, probably"
},

{
    loc:"images/Pills/hair.jpg",
    alt:"Hair Grower",
    title:"Hackme Co. Hair Growing Tonic",
    price:"$19.99",
    desc:"Balding? Our patent pending formula keeps your hair growing <br>  no matter the ailment. Here at hackme, our saying is <br> \"Use it or dont, we dont care we're not legally liable if it doesnt work anyway\"...we should  <br> probably rethink that one"
},

{
    loc:"images/Pills/instantgirl.jpg",
    alt:"Instant Girl",
    title:"Hackme Co. Instant Girl Pills",
    price:"$5.99",
    desc:"Contains: Sugar, Spice, Everything nice. <br> Just add water. WARNING: DO NOT CONSUME. Not because something <br> legally troubling will happen, we just dont <br> actually know whats in it and <br> if it will kill you. but it probably wont. maybe. "
},
{
    loc:"images/Pills/quake.jpg",
    alt:"Earthquake Pills",
    title:"Hackme Co. Earthquake Pills",
    price:"$29.99",
    desc:"After an unfortunate event resulting in the destruction of several different nations <br> and heavy class action lawsuits with allegations <br> that were never proven in a court of law, we are <br> once again selling our patented <br> earthquake pills. shake up your life today!"
},
{
    loc:"images/Pills/triplef.jpg",
    alt:"Leg Muscle Vitamins",
    title:"Hackme Co. Leg Muscle Vitamins",
    price:"$10.99",
    desc:"Not approved by any sports association, but we wont tell if you dont!"
}
];
var menSelected = "neutral";
//setup of the initial loop
//menu handlers
function modalLoader(itemselected,options){
    console.log(itemselected);
    console.log(options);
    document.querySelector(".modalcontent").innerHTML=" ";


    if (options == "DIY"){

        console.log(images_DIY[itemselected].desc);
        var price = images_DIY[itemselected].price;
        var description = images_DIY[itemselected].desc;
        var titleholder = images_DIY[itemselected].title;
        var rootCont = document.createElement('div')
        rootCont.setAttribute('class',"rootModCont");
        var itemImg = images_DIY[itemselected].loc;
        newImage = document.createElement('img');
        newImage.src = itemImg;
        newImage.height=300;
        newImage.width=300;
        imageCont = document.createElement('div');
        imageCont.setAttribute("class","modImg");
        imageCont.appendChild(newImage);
        rootCont.appendChild(imageCont);
        //text
        descText = document.createElement('p');
        descText.setAttribute('class','font-effect-outline')
        descText.innerHTML=description;
        itemPrice=document.createElement('p');
        itemPrice.setAttribute('class','font-effect-outline')
        itemPrice.innerHTML=price;
        //just added
        titleCont = document.createElement('div');
        titleCont.setAttribute('class', "itemTitle");
        titleTxt = document.createElement('p');
        titleTxt.setAttribute('class', 'font-effect-outline');
        titleTxt.innerHTML= titleholder;
        titleCont.appendChild(titleTxt);
        //append
        desCont = document.createElement('div');
        desCont.appendChild(titleCont);
        desCont.appendChild(descText);
        desCont.appendChild(itemPrice);
        desCont.setAttribute("class","desCont");
        var closebutton = document.createElement('span');
        closebutton.setAttribute('class', 'close');
        closebutton.innerHTML = "&times;";
        rootCont.appendChild(desCont);
        document.querySelector('.modalcontent').appendChild(rootCont);
        document.querySelector('.modalcontent').appendChild(closebutton);

        document.querySelector(".modal").style.display="block";
        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector(".modal").style.display="none";
        });

    }
    if (options == "Gadgets"){
        console.log(images_DIY[itemselected].desc);
        var price = images_Gadgets[itemselected].price;
        var description = images_Gadgets[itemselected].desc;
        var titleholder = images_Gadgets[itemselected].title;
        var rootCont = document.createElement('div')
        rootCont.setAttribute('class',"rootModCont");
        var itemImg = images_Gadgets[itemselected].loc;
        newImage = document.createElement('img');
        newImage.src = itemImg;
        newImage.height=300;
        newImage.width=300;
        imageCont = document.createElement('div');
        imageCont.setAttribute("class","modImg");
        imageCont.appendChild(newImage);
        rootCont.appendChild(imageCont);
        //text
        descText = document.createElement('p');
        descText.setAttribute('class','font-effect-outline')
        descText.innerHTML=description;
        itemPrice=document.createElement('p');
        itemPrice.setAttribute('class','font-effect-outline')
        itemPrice.innerHTML=price;
        //just added
        titleCont = document.createElement('div');
        titleCont.setAttribute('class', "itemTitle");
        titleTxt = document.createElement('p');
        titleTxt.setAttribute('class', 'font-effect-outline');
        titleTxt.innerHTML= titleholder;
        titleCont.appendChild(titleTxt);
        //append
        desCont = document.createElement('div');
        desCont.appendChild(titleCont);
        desCont.appendChild(descText);
        desCont.appendChild(itemPrice);
        desCont.setAttribute("class","desCont");
        var closebutton = document.createElement('span');
        closebutton.setAttribute('class', 'close');
        closebutton.innerHTML = "&times;";
        rootCont.appendChild(desCont);
        document.querySelector('.modalcontent').appendChild(rootCont);
        document.querySelector('.modalcontent').appendChild(closebutton);

        document.querySelector(".modal").style.display="block";
        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector(".modal").style.display="none";
        });

    }
    if (options == "Essentials"){
        
        console.log(images_DIY[itemselected].desc);
        var price = images_essent[itemselected].price;
        var description = images_essent[itemselected].desc;
        var titleholder = images_essent[itemselected].title;
        var rootCont = document.createElement('div')
        rootCont.setAttribute('class',"rootModCont");
        var itemImg = images_essent[itemselected].loc;
        newImage = document.createElement('img');
        newImage.src = itemImg;
        newImage.height=300;
        newImage.width=300;
        imageCont = document.createElement('div');
        imageCont.setAttribute("class","modImg");
        imageCont.appendChild(newImage);
        rootCont.appendChild(imageCont);
        //text
        descText = document.createElement('p');
        descText.setAttribute('class','font-effect-outline')
        descText.innerHTML=description;
        itemPrice=document.createElement('p');
        itemPrice.setAttribute('class','font-effect-outline')
        itemPrice.innerHTML=price;
        //just added
        titleCont = document.createElement('div');
        titleCont.setAttribute('class', "itemTitle");
        titleTxt = document.createElement('p');
        titleTxt.setAttribute('class', 'font-effect-outline');
        titleTxt.innerHTML= titleholder;
        titleCont.appendChild(titleTxt);
        //append
        desCont = document.createElement('div');
        desCont.appendChild(titleCont);
        desCont.appendChild(descText);
        desCont.appendChild(itemPrice);
        desCont.setAttribute("class","desCont");
        var closebutton = document.createElement('span');
        closebutton.setAttribute('class', 'close');
        closebutton.innerHTML = "&times;";
        rootCont.appendChild(desCont);
        document.querySelector('.modalcontent').appendChild(rootCont);
        document.querySelector('.modalcontent').appendChild(closebutton);

        document.querySelector(".modal").style.display="block";
        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector(".modal").style.display="none";
        });

    }
    if (options == "Pills"){
        console.log(images_DIY[itemselected].desc);
        var price = images_Pills[itemselected].price;
        var description = images_Pills[itemselected].desc;
        var titleholder = images_Pills[itemselected].title;
        var rootCont = document.createElement('div')
        rootCont.setAttribute('class',"rootModCont");
        var itemImg = images_Pills[itemselected].loc;
        newImage = document.createElement('img');
        newImage.src = itemImg;
        newImage.height=300;
        newImage.width=300;
        imageCont = document.createElement('div');
        imageCont.setAttribute("class","modImg");
        imageCont.appendChild(newImage);
        rootCont.appendChild(imageCont);
        //text
        descText = document.createElement('p');
        descText.setAttribute('class','font-effect-outline')
        descText.innerHTML=description;
        itemPrice=document.createElement('p');
        itemPrice.setAttribute('class','font-effect-outline')
        itemPrice.innerHTML=price;
        //just added
        titleCont = document.createElement('div');
        titleCont.setAttribute('class', "itemTitle");
        titleTxt = document.createElement('p');
        titleTxt.setAttribute('class', 'font-effect-outline');
        titleTxt.innerHTML= titleholder;
        titleCont.appendChild(titleTxt);
        //append
        desCont = document.createElement('div');
        desCont.appendChild(titleCont);
        desCont.appendChild(descText);
        desCont.appendChild(itemPrice);
        desCont.setAttribute("class","desCont");
        var closebutton = document.createElement('span');
        closebutton.setAttribute('class', 'close');
        closebutton.innerHTML = "&times;";
        rootCont.appendChild(desCont);
        document.querySelector('.modalcontent').appendChild(rootCont);
        document.querySelector('.modalcontent').appendChild(closebutton);

        document.querySelector(".modal").style.display="block";
        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector(".modal").style.display="none";
        });
    }
    if (options=="Bait"){
        console.log(images_DIY[itemselected].desc);
        var price = images_Pills[itemselected].price;
        var description = images_Pills[itemselected].desc;
        var titleholder = images_Pills[itemselected].title;
        var rootCont = document.createElement('div')
        rootCont.setAttribute('class',"rootModCont");
        var itemImg = images_Pills[itemselected].loc;
        newImage = document.createElement('img');
        newImage.src = itemImg;
        newImage.height=300;
        newImage.width=300;
        imageCont = document.createElement('div');
        imageCont.setAttribute("class","modImg");
        imageCont.appendChild(newImage);
        rootCont.appendChild(imageCont);
        //text
        descText = document.createElement('p');
        descText.setAttribute('class','font-effect-outline')
        descText.innerHTML=description;
        itemPrice=document.createElement('p');
        itemPrice.setAttribute('class','font-effect-outline')
        itemPrice.innerHTML=price;
        //just added
        titleCont = document.createElement('div');
        titleCont.setAttribute('class', "itemTitle");
        titleTxt = document.createElement('p');
        titleTxt.setAttribute('class', 'font-effect-outline');
        titleTxt.innerHTML= titleholder;
        titleCont.appendChild(titleTxt);
        //append
        desCont = document.createElement('div');
        desCont.appendChild(titleCont);
        desCont.appendChild(descText);
        desCont.appendChild(itemPrice);
        desCont.setAttribute("class","desCont");
        var closebutton = document.createElement('span');
        closebutton.setAttribute('class', 'close');
        closebutton.innerHTML = "&times;";
        rootCont.appendChild(desCont);
        document.querySelector('.modalcontent').appendChild(rootCont);
        document.querySelector('.modalcontent').appendChild(closebutton);

        document.querySelector(".modal").style.display="block";
        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector(".modal").style.display="none";
        });
    }
}
function gridConstructor(imageSet){
    var rootContainer = document.querySelector(".storeFront");
    var i = 1;
    for (x of imageSet){
         divCont = document.createElement("div");
         Item = document.createElement("img");
        Item.setAttribute('src', x.loc);
        Item.setAttribute('alt', x.alt);
        Item.setAttribute('title', x.title);
        Item.height = 300;
        Item.width = 300;
        var classes = "item" + i;
        divCont.setAttribute('class', classes);
        divCont.setAttribute('id', i-1);
        divCont.setAttribute('onclick', "modalLoader(id, menSelected)");
        console.log("Appending");
        divCont.appendChild(Item);
       rootContainer.appendChild(divCont);
       i++;
    }
}
function gridTeardown(){
    document.querySelector('.storeFront').innerHTML = ' ';
}


window.onload = function(){
    console.log("On load");
    menSelected = "DIY";
    gridConstructor(images_DIY);
    document.querySelector('.Gadgets').addEventListener('click', function(){
        menSelected = "Gadgets";
        gridTeardown();
        gridConstructor(images_Gadgets);
    });

    document.querySelector('.Pills').addEventListener('click', function(){
        menSelected="Pills";
        gridTeardown();
        gridConstructor(images_Pills);
    });

    document.querySelector('.Essentials').addEventListener('click', function(){
        menSelected="Essentials";
        gridTeardown();
        gridConstructor(images_essent);
    });

    document.querySelector('.DIY').addEventListener('click', function(){
        menSelected="DIY";
        gridTeardown();
        gridConstructor(images_DIY);
    });

    document.querySelector('.Bait').addEventListener('click', function(){
        menSelected="Bait";
        gridTeardown();
        gridConstructor(images_bait);
    });

    var mod=document.createElement('div');
        mod.setAttribute('id', "display");
        mod.setAttribute('class', "modal");
        var modcont = document.createElement('div');
        modcont.setAttribute('class', 'modalcontent');
        var closebutton = document.createElement('span');
        closebutton.setAttribute('class', 'close');
        closebutton.innerHTML = "&times;";

        //appending
        modcont.appendChild(closebutton);
        mod.appendChild(modcont);
        document.getElementById("BODY").appendChild(mod);

        document.querySelector('.close').addEventListener('click', function(){
            document.querySelector(".modal").style.display="none";
            document.querySelector(".modalcontent").style.display="none";
        });

        document.querySelector('.containerfordrop').addEventListener('click',function(){
          document.querySelector(".dropdown-content").style.display="block";
        });

};
window.onclick = function(event){
    if (event.target==document.querySelector('.modal')){
            document.querySelector(".modal").style.display="none";
    }

};
