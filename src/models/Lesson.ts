import { Document, model, Schema } from 'mongoose';

interface ILesson extends Document {
  lesson_name: string;
  lesson_number: number;
  vocabulary: number;
  created_by: Schema.Types.ObjectId;
}

const lessonSchema = new Schema<ILesson>(
  {
    lesson_name: {
      type: String,
      required: true,
    },
    lesson_number: {
      type: Number,
      required: true,
      unique: true,
    },
    vocabulary: {
      type: Number,
      required: true,
      default: 0,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      rel: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Lesson = model<ILesson>('Lesson', lessonSchema);
export default Lesson;
