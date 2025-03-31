let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        displayPic: "https://images.unsplash.com/photo-1626818590202-813076dd8a7b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 2,
        location: "Delhi, india ",
        name: "Janhvi",
        age: 23,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "Music"
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest:"Writing"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae adipisci quibusdam?",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1632242548759-36d7fa619e0d?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Mohali, india",
        name: "Sivangi",
        age: 27,
        interests: [{
            icon: `<i class="ri-spotify-fill"></i>`,
            interest: "Music"
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae adipisci is bidi cute girls.",
        isFriend: null
    },
    {
        profilePic: "https://images.unsplash.com/photo-1732347036304-79e7b139c752?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1731484395229-ecc02968978d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Chandigra,india",
        name: "Sakshi",
        age: 25,
        interests: [{
            icon: `<i class="ri-spotify-fill"></i>`,
            interest: "Music"
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing",
        }],
        bio: "Lorem ipsum dolor sit amet consectetur elit. In quae adipisci quibusdam blanditiis magni earum?",
        isFriend: null
    },
    {
        profilePic: "https://plus.unsplash.com/premium_photo-1703343321122-f0d525af298b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://plus.unsplash.com/premium_photo-1682095661711-f5d67d0e75a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 4,
        location: "Shangai, china ",
        name:"Naina",
        age: 15,
        interests: [{
            icon: `<i class="ri-spotify-fill"></i>`,
            interest: "Music"
        },
        {
            icon: `<i class="ri-quill-pen-fill"></i>`,
            interest: "writing"
        }],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quae adipisci quibusdam blanditiis magni earum?",
        isFriend: null
    },
];

function select(elem) {
    return document.querySelector(elem);
}

let curr = 0;
function setData(index) {
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").innerText = users[index].location;
    select(".name h1:nth-child(1)").innerText = users[index].name;
    select(".name h1:nth-child(2)").innerText = users[index].age;

    let clutter = '';
    users[index].interests.forEach((i) => {
        clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
                            ${i.icon} <h3 class="text-sm font-bold tracking-tight">${i.interest}</h3>
                    </div>`;
    });
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;
}

function setInitial() {
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr + 1]?.displayPic;
//HERE WE CALL setData Function
    setData(curr)
    curr = 2;
};
setInitial()

//THIS WILL USE FOR CHANGING POST AND ANIMATION 
let isAnimating = false; //last

function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main= select(".maincard");
                let incoming= select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");  ///
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                })
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        tl.to(".maincard", {
            opacity:0,
            scale: 1.1,
            duration: .9,
            ease: Circ
        },"a")
        .from(".incomingcard", {
            opacity:0,
            scale: .9,
            duration: 1.1,
            ease: Circ,
        },"a")  
    }
 };

let deny = select(".deny")
let accept = select(".accept")

//IF I CLICK DENY THEN imageChange() function will EXECUITED
deny.addEventListener("click",function(){
    imageChange() 
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        opacity: 0,
        stagger: .1,
        ease:Power4.easeInOut,
        duration:1
    })
});
accept.addEventListener("click",function(){
    imageChange() 
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
        opacity: 0,
        stagger: .1,
        ease:Power4.easeInOut,
        duration:1
    })
});

//FOR ANIMATED detailscontainer ALL PART
function containerChange(){
    document.querySelectorAll(".element").forEach(function(element){
        let div= document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,`overflow-hidden`);
        div.appendChild(element);
        select(".details").appendChild(div);
    })
}
containerChange()
