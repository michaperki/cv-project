import { v4 as uuidv4 } from "uuid";

const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
  },
  education: [
    {
      id: uuidv4(),
      school: "",
    },
  ],
  experience: [
    {
      id: uuidv4(),
      job: "",
    },
  ],
};

export default emptyCV;
