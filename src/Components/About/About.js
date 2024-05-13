
import Card from 'react-bootstrap/Card';
import Accordion from '../Accordion/accordion';
import Aboutimg from '../Aboutimg/Topimage';
 function About() {

  return (
    <>
    <Aboutimg />
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/5384536/pexels-photo-5384536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Meet Me</Card.Title>
        <Card.Text>
          Started wellness and fitness journey in 2019. Going strong!
          Big believer in meal prep, exercise, and eating
          in mdoeration. 
        </Card.Text>
        
      </Card.Body>
    </Card>
    

    <h1>
      FAQs
    </h1>

    <Accordion />
    </>
  );
  
}

export default About;
