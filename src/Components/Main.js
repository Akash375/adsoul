import React,{Component} from 'react';
import { Navbar } from 'reactstrap';
import {ReactComponent as homimg} from './asset1.svg';
import Card from './CardComponent';
import InfiniteScroll from 'react-infinite-scroll-component';

class Main extends Component{
    constructor(props){
        super(props);

        this.state={
            items: Array.from({ length: 5 }),
            hasMore: true
        }

    }

    fetchMoreData = () => {
        if (this.state.items.length >= 500) {
          this.setState({ hasMore: false });
          return;
        }
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 5 }))
          });
        }, 500);
      };

    render(){
        return(
            <>
                <div className="col-md-6" style={{float:"left",color:"#FFFFFF",padding:"0"}}>
                    <div style={{background:"#7164FF", height:"50vh"}}>
                        <Navbar>ADSOUL</Navbar>
                        < homimg />
                    </div>
                    <div style={{background:"#6155DB", height:"50vh"}}>
                        <h3 align="left">Revenue Optimization</h3>
                    </div>
                </div>
                <div className="col-md-6" style={{float:"left",padding:"0"}}>
                    <div className="jumbotron" style={{background:"#FFFFFF"}}>
                        <h3 align="left">Apps</h3>
                    </div>
                    <div style={{background:"#F7F7F7"}}>
                        <InfiniteScroll
                        dataLength={this.state.items.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.hasMore}
                        loader={<h4>Loading...</h4>}
                        height={550}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                            </p>
                        }
                        >
                        {this.state.items.map((i, index) => (
                            <Card key={index} />
                        ))}
                        </InfiniteScroll>
                    </div>
                </div>
            </>
                
        );
    }
}

export default Main;