import { Col, Row } from "react-bootstrap";
import {sendApiRequest} from "../../recipeApiHandler/recipeApiHandler";
import {recipe} from "../recipeInterfaces"

const foodRecipes:number [] = [
    1,3,4,5,6
];

export function RecipeCardGrid(){
    return (
        <div>
            <Row xs={1} md ={3} lg={5}>
                <Col >
              {sendApiRequest.map((recipe:recipe)=>(

                  <p>{number}</p>



              ))}


           
                </Col>
            </Row>


        </div>
    )




}