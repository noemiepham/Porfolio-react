
const Home = () => {
    return (
        <section className="home" id ="home">
           
           <div className ="flex">
                <div id= "home-background" className="home-fix">    
                    <div className="text">
                        <div>Hello, I’m  <span>Noémie Pham</span> </div>
                        <div>Front-end web developer </div>
                    </div>
                    <div className ="viewbox" >
                        <a href ="#about">VIEW MORE</a>
                        <svg className ="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v13M5 12l7 7 7-7"/></svg>
                    </div>
                </div>
           </div>
        </section>
    )
}
export default Home