import { Schema, model } from 'mongoose'; 

const TodoSchema = new Schema(
   {
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
); 


export default model('Todo', TodoSchema);