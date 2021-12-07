function copy (){
    swal("Hecho", "¡Esta dirección de correo se ha copiado exitosamente en el portapapeles!", "success")
}

function back (){
    swal({
        title: "¿Seguro que quieres salir de esta página?",
        text: "Si es así, presiona el botón de color rojo",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Entiendo",
        closeOnConfirm: false
      },
      function(){
        swal("Hecho!", "Regresa pronto!", "success");
      });
}