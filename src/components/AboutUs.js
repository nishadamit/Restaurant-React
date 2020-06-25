import React from 'react';
import { Card,Row,Container,Col,Breadcrumb,Media } from 'react-bootstrap';


const RenderLeader = ({leader}) =>
{
   return(
    <Media >
        <img
            width={64}
            height={64}
            className="mr-3"
            src={leader.image}
            alt={leader.name}
        />
        <Media.Body>
            <h5>{leader.name}</h5>
            <h6>{leader.designation}</h6>
            <p>{leader.description}</p>
        </Media.Body>
   </Media>
   )
}

 function AboutUs(props) {
    return (
         <Container>
             <Row>
                 <Breadcrumb  >
                       <Breadcrumb.Item href="/home" >Home</Breadcrumb.Item>
                       <Breadcrumb.Item active >About Us</Breadcrumb.Item>
                  </Breadcrumb>        
             </Row>
             <Row>
                   <h3>About Us</h3>
                   <hr/>
             </Row>
             <Row>
                 <Col md={6} >
                     <h2>Our History</h2>
                     <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                     <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                 </Col>
                 <Col md={6} className="mb-2" >
                 <Card className="text-center">
                    <Card.Header style={{backgroundColor:"#0275D8"}} >Facts At a Glance</Card.Header>
                    <Card.Body>
                       <Row>
                           <Col xs={6} ><h6>Started</h6></Col>
                           <Col xs={6} ><p>3 feb,2003</p></Col>
                           <Col xs={6} ><h6>Major Stake Holder</h6></Col>
                           <Col xs={6} ><p>HK Fine Foods Inc.</p></Col>
                           <Col xs={6} ><h6>Last Year's Turnover</h6></Col>
                           <Col xs={6} ><p>$1,250,375</p></Col>
                           <Col xs={6} ><h6>Employees</h6></Col>
                           <Col xs={6} ><p>40</p></Col>
                       </Row>
                     </Card.Body>
                    </Card>
                 </Col>
             </Row>
             <Row className="mb-2"  >
              <Col xs={12}  >
                  <Card bg={"light"} style={{padding:"1% 2% 1% 3%"}}  >
                       <h5  >You better cut the pizza in four pieces because I'm not hungry enough to eat six.</h5>
                       <p><i>---Yogi Berra,The Wit and Wisdom of Yogi Berra,P. Pepe, Diversion Books, 2014</i></p>
                  </Card>
              </Col>
             </Row>
             <hr/>
             <Row>
                 <Col xs={12} >
                     <h1>Corporate Leadership</h1>
                     {props.leaders.map((leader)=>{
                         return <RenderLeader leader={leader} key={leader.id} />
                     })}
                 </Col>
             </Row>
         </Container>
    )
}

export default AboutUs;
