import React, {Component} from "react";
import "./App.css";
class App extends Component {
    
    
    render(){
    return(
        <div>
        <section className="nav">
        <ul className="nav justify-content">
        
        <img src="/images/ironhack-logo.svg"/>
        </ul>
        <ul className="nav justify-content">
        
        <img src="/images/menu-top.svg"/>
        </ul>
        </section>
        <section className="main">
        

        <div className=" jumbotron p-4 p-md-5 text-white main">

            <div className="col-md-6 px-0 blah">
            <h1 className="display-4 font-italic">Say hello to reactJS</h1>
            <p className="lead my-3">You will lurn a front framework from scratch, to become a Ninka Developper</p>
            <p className="lead mb-0"><a href="#" className="text-darkblue font-weight-bold btn btn btn-light">Continue reading...</a></p>
            </div>
    </div>

        </section>
        <div class="album py-5 bg-light">
            <div class="container">

                <div class="row">
                    <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225"  src="/images/icon1.png" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"></svg>
                        <div class="card-body">
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-muted">9 mins</small>
                        </div>
                        </div>
                    </div>
                        
                    </div>
                    <div class="col-md-4">
                        <img src="/images/icon1.png"/>
                    </div>
                    <div class="col-md-4">
                        <img src="/images/icon1.png"/>
                    </div>

                    <div class="col-md-4">
                        <img src="/images/icon1.png"/>
                    </div>
                        </div>
                </div>
  
            </div>
        </div>
        );
    }
}
export default App;