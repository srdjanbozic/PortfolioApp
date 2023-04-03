import "./Testimonials.scss";

export default function testimonials() {
    const users = [
        {
            id: 1,
            name: "Tom Johns",
            title: "Senior Dev",
            img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            icon:"assets/twitter.png",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        },
        {
            id: 2,
            name: "Alex Hollifield",
            title: "CEO of LoremI",
            img:"https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
            icon:"assets/youtube.png",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
            featured: true,
        },
        {
            id: 3,
            name: "Marta Slick",
            title: "CEO of HelloDev",
            img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            icon:"assets/linkedin.png",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",

        },
    ];
    return (
        <div className="testimonials" id="testimonials">
           <h1>Testimonials</h1>
           <div className="container">
               {users.map(d =>(

                   <div className={d.featured ? "card featured" : "card"}>
                   <div className="top">
                       <img src="assets/right-arrow.png" className="left" alt="strela" />
                       <img 
                       className="user"
                       src={d.img}  
                       alt="asd" />
                       <img src={d.icon} className="right" alt="yt" />
                   </div>
                   <div className="center">
                   {d.desc}
                   </div>
                   <div className="bottom">
                       <h3>{d.name}</h3>
                       <h4>{d.title}</h4>
                   </div>
               </div>
                   ))}
           </div>
        </div>
    )
}
