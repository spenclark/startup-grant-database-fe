import {
  InfoFieldData,
  FocusFormData,
  DemoFormData
} from "../../suggestion/formUtils/formValues";

const approvedValue = {
  label: "Approved",
  name: "is_reviewed",
  select: true,
  data: [
    {
      value: "approved",
      label: "Approved"
    },
    {
      value: "not_approved",
      label: "Pending"
    }
  ]
};

const editFormValues = [
  { ...approvedValue },
  ...InfoFieldData,
  ...DemoFormData,
  ...FocusFormData
];

export default editFormValues;
