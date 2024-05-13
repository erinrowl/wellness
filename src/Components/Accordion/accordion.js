import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  return (
    
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Why Meal Prep?</Accordion.Header>
        <Accordion.Body>
          There is so many benefits to meal prepping! First of all it saves time
          worrying about making dinner plus it will save you money too.
          Throwing away less food means that you will save big bucks on groceries.
          Personally it helps me to eat out less and hold myself accountble in 
          choosing healthier meals.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Should I count my calories?</Accordion.Header>
        <Accordion.Body>
          Keeping track of calories is a personal choice. Decide what is best for you by establishing
          what your goals are. This could be losing weight, fat loss, or even just staying fit.
          I prefer using my favorite app when tracking my calories, water intake, and the amount
          of macronutrients that I am getting from differnet foods.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How often should I workout?</Accordion.Header>
        <Accordion.Body>
          You can develop a plan best on your weight, body, and long term goals.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What form of exercise is best?</Accordion.Header>
        <Accordion.Body>
          This will depend on what your goals. Whether it be fat loss, toning, stengthening the core, or
          building endurance, decide what is best for you. Pilates is a great way to stregnthen differnet
          muscle groups and build flexibility. Different forms of cardio such as cycling or using 
          the starimaster can be great outlets for strengthen the heart and allowing your body
          to get used to longer periods of physical activity. No particular exercise is a one size fits all
          situation. I love to hike, using the starimaster, and going on walks to help me with my
          stamina and endurance.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
  );
  
}

export default BasicExample;