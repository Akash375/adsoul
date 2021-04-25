import React,{Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <center>
            <div className="row mt-4 detailCard col-10" align="left">
                    <div className="col-md-8 col-lg-9 resDetail ml-sm-auto mr-auto">
                        <h4>App.Name</h4>
                            <address>App.data</address>
                            data<br/>
                            data<br/><br/>
                    </div>                            
            </div>
            </center>
        );
    }
}

export default Card;