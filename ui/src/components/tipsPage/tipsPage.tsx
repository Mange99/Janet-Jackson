import { Tips } from "../tipsCard/tips";
import {
  Heading,
} from "@chakra-ui/react";




export function TipsPage() {
  return (
  <div className="d-flex justify-content-evenly flex-wrap" >
    <Heading
      pt={24}
      pb={4}
      size="2xl"
      bgGradient="linear-gradient(90deg, rgba(124,163,149,1) 0%, rgba(38,208,178,1) 11%, rgba(33,208,177,1) 49%, rgba(30,185,164,1) 77%, rgba(25,171,148,1) 100%)"
      bgClip="text"
      >
      These tips will make you stronger than your excuses!
    </Heading>
    <div className="d-flex justify-content-evenly flex-wrap mt-5" >
  <Tips />
    </div>
  </div>
  )
}


