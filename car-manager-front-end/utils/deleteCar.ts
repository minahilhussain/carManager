import Router from "next/router";
import swal from 'sweetalert';
import { navigate } from "./navigateToHome";

export const deleteCar = async (uuid: string) =>{
  console.log(`host is ${process.env.HOST}`);
   const willDelete = await swal({
    title: "Are you sure?",
    text: "Are you sure want to delete this note?",
    icon: "warning",
    buttons: [
      'Cancel',
      'Delete'
    ],
    dangerMode: true,
  });
  
  if (willDelete) {
    const response = await fetch(`http://localhost:5000/car/${uuid}`, {
     method: `DELETE`,
   });
    swal("Deleted!", "Note deleted sucessfully", "success", {
    className: "confirmation-button"
    });
    navigate('/');
  }
}