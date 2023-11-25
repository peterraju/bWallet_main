const AddNewGaurd = () => {
    const clearFields = () => {
        let address = document.getElementById('address')
        let gaurdians = document.getElementById('gaurdians')
        gaurdians.value ='';
        address.value = '';
    }

  return (

    <div onClick={ clearFields } className="mt-2   flex cursor-pointer">
    
      <div className="mr-2 text-4xl  decoration-[#FCADFF] "> + </div>
      <div  className=" mt-1 flex text-l decoration-[#FCADFF "> Add New Gaurdian</div>
    </div>
  );
};

export default AddNewGaurd;
