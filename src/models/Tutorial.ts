import { Document, model, Schema } from 'mongoose';

export interface ITutorial extends Document {
  title: string;
  description: string;
  video_url: string;
  createdAt: Date;
  updatedAt: Date;
}

const tutorialSchema = new Schema<ITutorial>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    video_url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tutorial = model<ITutorial>('Tutorial', tutorialSchema);
export default Tutorial;
