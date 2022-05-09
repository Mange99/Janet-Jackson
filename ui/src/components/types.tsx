/**
 * interface for the JsonObject received for an exercise, gifUrl is a url to a gif
 * bodyPartImg is an img of which bodypart the exercise targets, does not have to exist
 * bodyPart can be chest, lower arms etc...
 * target can be abs, pectorals, quads etc...
 * id are four numbers from 0001 to 1327, there exists 1327 different exercises
 * equipment is body weight, band etc...
 */

export interface ExerciseArrProps {
  exersiceProps: ExerciseProps[];
}

export interface SessionProps {
  token: string;
  sessionTitle: string;
  exersiceProps: ExerciseSession[];
}

export interface ExerciseSession {
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  target: string;
  bodyPartImg: string;
  sets: number;
  reps: number;
}

export interface ExerciseCardGridProps {
  onClick: (e: ExerciseProps) => void;
  exercises: ExerciseProps[];
}
export interface ExerciseProps {
  name: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  target: string;
  bodyPartImg: string;
}

export interface InfoPanelProps {
  show: boolean;
  onHide: () => void;
  exercise: ExerciseProps;
}
