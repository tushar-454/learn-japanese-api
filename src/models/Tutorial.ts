import { Document, model, Schema } from 'mongoose';

interface ITutorial extends Document {
  title: string;
  description: string;
  video_url: string;
}

const tutorialSchema = new Schema<ITutorial>({});

const Tutorial = model<ITutorial>('Tutorial', tutorialSchema);
export default Tutorial;
