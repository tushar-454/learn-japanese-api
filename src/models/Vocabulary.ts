import { Document, model, Schema } from 'mongoose';

interface IVocabulary extends Document {
  word: string;
  pronunciation: string;
  meaning: string;
  when_to_say: string;
  lesson_no: number;
  created_by: Schema.Types.ObjectId;
}

const vocabularySchema = new Schema<IVocabulary>(
  {
    word: {
      type: String,
      required: true,
    },
    pronunciation: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
    when_to_say: {
      type: String,
      required: true,
    },
    lesson_no: {
      type: Number,
      required: true,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Vocabulary = model<IVocabulary>('Vocabulary', vocabularySchema);
export default Vocabulary;
