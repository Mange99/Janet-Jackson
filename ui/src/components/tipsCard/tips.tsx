import React from "react";
import ReactDOM from "react-dom";
import { Button, Card, Row, Col} from "react-bootstrap";



import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';






export interface tipsData {
  title: string;
  tipsDescription: string;
  id: string;
  tipsImg: string;
  sourceTips: string;
}

const tipss: tipsData[] = [
  {
    title: "150 to 300 Minutes a week! …",
    tipsDescription: "'Adults should do at least 150 minutes to 300 minutes a week of moderate-intensity, or 75 minutes to 150 minutes a week of vigorous-intensity aerobic physical activity, or an equivalent combination of moderate- and vigorous-intensity aerobic activity. They should also do muscle-strengthening activities on 2 or more days a week.'",
    id: "0001",
    tipsImg: "temp",
    sourceTips: "https://jamanetwork.com/journals/jama/article-abstract/2712935",
  },
  {
    title: "What about for pregnant women?",
    tipsDescription: "'Pregnant and postpartum women should do at least 150 minutes of moderate-intensity aerobic activity a week.'",
    id: "0002",
    tipsImg: "temp",
    sourceTips: "https://jamanetwork.com/journals/jama/article-abstract/2712935",
  },
  {
    title: "What if I can’t because of disability?",
    tipsDescription: "'Adults with chronic conditions or disabilities, who are able, should follow the key guidelines for adults and do both aerobic and muscle-strengthening activities.'",
    id: "0003",
    tipsImg: "temp",
    sourceTips: "https://jamanetwork.com/journals/jama/article-abstract/2712935",
  },
  {
    title: "MOVE MORE—SITT LESS!",
    tipsDescription: "'Recommendations emphasize that moving more and sitting less will benefit nearly everyone.'",
    id: "0004",
    tipsImg: "temp",
    sourceTips: "https://jamanetwork.com/journals/jama/article-abstract/2712935",
  },
  {
    title: "'I never workout, what about me?'",
    tipsDescription: "'Individuals performing the least physical activity benefit most by even modest increases in moderate-to-vigorous physical activity. Additional benefits occur with more physical activity. Both aerobic and muscle-strengthening physical activity are beneficial.'",
    id: "0005",
    tipsImg: "temp",
    sourceTips: "https://jamanetwork.com/journals/jama/article-abstract/2712935",
  },
];

export function Tips () {
  return  (
    <Row xs={1} sm={2} md={2} lg={3} xl={5} className="rowTest">
      {tipss.map(tipss => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{tipss.title}</Card.Title>
              <Card.Text>{tipss.tipsDescription}</Card.Text>
              <a href = {tipss.sourceTips}> Source </a>
            </Card.Body>
          </Card>
          </Col>
          ))}
    </Row>
  )

}

