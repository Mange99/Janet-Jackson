import { Col, Row } from "react-bootstrap";

const foodRecipes:number [] = [
    1,3,4,5,6
];

export function RecipeCardGrid(){
    return (
        <div>
            <Row xs={1} md ={3} lg={5}>
                <Col >
              {foodRecipes.map((number)=>(

                  <p>{number}</p>



              ))}


           
                </Col>
            </Row>


        </div>
    )




}