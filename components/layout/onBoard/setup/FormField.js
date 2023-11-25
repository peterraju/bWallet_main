
const { default: AddNewGaurd } = require("./inputs/AddNewGaurd");
const { default: InputFields } = require("./inputs/InputFields");



const FormField = () => {
  return (
    <div className="mt-1">
      <InputFields />
      <AddNewGaurd />
    </div>
  );
};
export default FormField;
